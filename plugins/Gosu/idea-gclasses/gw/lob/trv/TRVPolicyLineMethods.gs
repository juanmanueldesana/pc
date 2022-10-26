package gw.lob.trv

uses java.util.ArrayList
uses java.util.HashSet
uses java.util.Map
uses java.util.Set
uses java.math.BigDecimal
uses java.lang.Iterable

uses gw.pl.persistence.core.Key
uses gw.api.policy.AbstractPolicyLineMethodsImpl
uses gw.api.productmodel.CoveragePattern
uses entity.windowed.TRVCostVersionList
uses gw.api.util.JurisdictionMappingUtil
uses gw.validation.PCValidationContext
uses gw.policy.PolicyLineValidation
uses gw.lob.trv.TRVLineValidation
uses gw.rating.worksheet.treenode.WorksheetTreeNodeUtil
uses gw.rating.worksheet.treenode.WorksheetTreeNodeContainer
uses gw.api.tree.RowTreeRootNode
uses gw.lob.trv.financials.TRVQuoteDisplayUtil
uses gw.rating.AbstractRatingEngine
uses gw.lob.trv.rating.TRVRatingEngine

@Export
class TRVPolicyLineMethods extends AbstractPolicyLineMethodsImpl {

  var _line: entity.TRVLine

  construct(line: entity.TRVLine) {
    super(line)
    _line = line
  }

  override property get CoveredStates(): Jurisdiction[] {
    var states = new HashSet<Jurisdiction>()
    if (_line.Branch.BaseState != null) {
      states.add(_line.Branch.BaseState)
    }
    for (n in _line.TRVCovers) {
      states.add(n.TRVLine.Branch.BaseState)
    }
    return states.toTypedArray()
  }

  override property get AllCoverables(): Coverable[] {
    var list: ArrayList<Coverable> = {_line}
    list.addAll(_line.TRVCovers.toList())
    return list.toTypedArray()
  }

  override property get AllCoverages(): Coverage[] {
    var list = new ArrayList<Coverage>()
    for (cb in AllCoverables) {
      list.addAll(cb.CoveragesFromCoverable.toList())
    }
    return list?.toTypedArray()
  }

  override property get AllExclusions(): Exclusion[] {
    var list: ArrayList<Exclusion>
    for (cb in AllCoverables) {
      list.addAll(cb.ExclusionsFromCoverable.toList())
    }
    return list.toTypedArray()
  }

  override property get AllConditions(): PolicyCondition[] {
    var list: ArrayList<PolicyCondition>
    for (cb in AllCoverables) {
      list.addAll(cb.ConditionsFromCoverable.toList())
    }
    return list.toTypedArray()
  }

  override property get AllModifiables(): Modifiable[] {
    var list: ArrayList<Modifiable> = {_line}
    list.addAll(_line.TRVCovers.toList())
    return list.toTypedArray()
  }

  /**
   * All costs across the term, in window mode.
   */
  override property get CostVLs(): Iterable<TRVCostVersionList> {
    return _line.VersionList.TRVCosts
  }

  override property get Transactions(): Set<Transaction> {
    var branch = _line.Branch
    return branch.getSlice(branch.PeriodStart).TRVTransactions.toSet()
  }

  override property get SupportsRatingOverrides(): boolean {
    return true
  }

  override function getAllCostsForCoverage(covered: Coverable, covPat: CoveragePattern): List<Cost> {
    return _line.Branch.AllCosts.where(\cost -> {
      return cost typeis TRVCost and
          cost.Coverage != null and
          cost.Coverage.Pattern.PublicID.equals(covPat.PublicID) and
          cost.Coverage.OwningCoverable == covered
    })
  }

  override function createPolicyLineValidation(validationContext: PCValidationContext): PolicyLineValidation<entity.TRVLine> {
    return new TRVLineValidation(validationContext, _line)
  }

  override function createPolicyLineDiffHelper(reason: DiffReason, policyLine: PolicyLine): TRVDiffHelper {
    return new TRVDiffHelper(reason, this._line, policyLine as entity.TRVLine)
  }

  override function initialize() {
  }

  override function resetAutoNumberSequences() {
    renumberAllAutoSequences()
  }

  override function cloneAutoNumberSequences() {
  }

  override function bindAutoNumberSequences() {
    renumberAllAutoSequences()
  }

  override function renumberAutoNumberSequences() {
  }

  private function renumberAllAutoSequences() {
  }

  override function getWorksheetRootNode(showConditionals: boolean): RowTreeRootNode {
    var treeNodes: List<WorksheetTreeNodeContainer> = {}
    var util = new TRVQuoteDisplayUtil(_line, true)
    var cblsByType = util.getCoverablesWithCostsByType()
    var costsByCbl = util.getCostsByCoverable()
    var lineLevelCosts = costsByCbl.get(_line)

    // All but the line-level costs
    for (ctype in cblsByType.Keys.where(\t -> t != typeof(_line))) {
      var ctypeContainer = new WorksheetTreeNodeContainer(ctype.toString())
      ctypeContainer.ExpandByDefault = true
      treeNodes.add(ctypeContainer)
      for (cbl in cblsByType.get(ctype)) {
        var cblContainer = new WorksheetTreeNodeContainer(TRVQuoteDisplayUtil.CoverableDisplayName(cbl))
        cblContainer.ExpandByDefault = true
        ctypeContainer.addChild(cblContainer)
        for (c in costsByCbl.get(cbl)) {
          var costContainer = new WorksheetTreeNodeContainer(TRVQuoteDisplayUtil.CostDisplayName(c))
          cblContainer.addChild(costContainer)
          costContainer.addChildren(WorksheetTreeNodeUtil.buildTreeNodes(c, showConditionals))
        }
      }
    }

    // Line-level costs
    var lineContainer = new WorksheetTreeNodeContainer("Line-level")
    lineContainer.ExpandByDefault = true
    treeNodes.add(lineContainer)
    for (c in lineLevelCosts) {
      var costContainer = new WorksheetTreeNodeContainer(TRVQuoteDisplayUtil.CostDisplayName(c))
      lineContainer.addChild(costContainer)
      costContainer.addChildren(WorksheetTreeNodeUtil.buildTreeNodes(c, showConditionals))
    }

    return WorksheetTreeNodeUtil.buildRootNode(treeNodes)
  }
  
  override property get LocationsInUseOnOrAfterSliceDate() : Set<Key> {
    return {}
  }

  /***
   * This function decides whether to allow a location to be removed in the UI.
   * This default implementation is provided simply as a reminder that you are likely to want to override default behavior here, too.
   */
  override function canSafelyDeleteLocation(location: PolicyLocation): String {
    var notSafeReason = super.canSafelyDeleteLocation(location)

    if (notSafeReason.equalsIgnoreCase("")) {
      // Put line-specific reasons why a location cannot safely be deleted here.
    }

    return notSafeReason
  }

  override function doGetTIVForCoverage(cov: Coverage): BigDecimal {
    switch (cov.FixedId.Type) {
      // Enter case statements for each type of coverage here
    }
    return BigDecimal.ZERO
  }

  override function createRatingEngine(method: RateMethod, parameters: Map<RateEngineParameter, Object>): AbstractRatingEngine<TRVLine> {
    return new TRVRatingEngine(_line as productmodel.TRVLine, parameters[RateEngineParameter.TC_RATEBOOKSTATUS] as RateBookStatus)
  }

  override property get BaseStateRequired(): boolean {
    // Change this if you want to force a base state to be set for this line of business.
    return false
  }
}