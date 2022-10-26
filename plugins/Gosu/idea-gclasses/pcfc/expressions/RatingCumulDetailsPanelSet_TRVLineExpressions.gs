package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_TRVLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 165, column 47
    function valueRoot_65 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 160, column 33
    function value_62 () : String {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 165, column 47
    function value_64 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 170, column 47
    function value_67 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 175, column 51
    function value_70 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=costEffDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 179, column 35
    function value_73 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=costExpDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 183, column 35
    function value_76 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costProration_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 189, column 33
    function value_79 () : String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 195, column 57
    function value_81 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    property get cost () : TRVCost {
      return getIteratedValue(1) as TRVCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 96, column 51
    function valueRoot_26 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 91, column 37
    function value_23 () : String {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 96, column 51
    function value_25 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 101, column 51
    function value_28 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 106, column 55
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=costEffDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 110, column 39
    function value_34 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=costExpDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 114, column 39
    function value_37 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costProration_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 120, column 37
    function value_40 () : String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 126, column 61
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    property get cost () : TRVCost {
      return getIteratedValue(3) as TRVCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 61, column 39
    function initialValue_9 () : List<TRVCost> {
      return costsByCbl.get(cbl)
    }
    
    // PanelIterator (id=cblIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 56, column 33
    function initializeVariables_46 () : void {
        cblCosts = costsByCbl.get(cbl);

    }
    
    // 'label' attribute on Label at RatingCumulDetailsPanelSet.TRVLine.pcf: line 68, column 67
    function label_10 () : java.lang.String {
      return quoteDisplayUtil.CoverableDisplayName(cbl)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 81, column 30
    function sortBy_11 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 84, column 30
    function sortBy_12 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 91, column 37
    function sortValue_13 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 96, column 51
    function sortValue_14 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 101, column 51
    function sortValue_15 (cost :  TRVCost) : java.lang.Object {
      return cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 106, column 55
    function sortValue_16 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=costEffDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 110, column 39
    function sortValue_17 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=costExpDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 114, column 39
    function sortValue_18 (cost :  TRVCost) : java.lang.Object {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costProration_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 120, column 37
    function sortValue_19 (cost :  TRVCost) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 126, column 61
    function sortValue_20 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // '$$sumValue' attribute on RowIterator (id=cblRowIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 126, column 61
    function sumValueRoot_22 (cost :  TRVCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator (id=cblRowIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 126, column 61
    function sumValue_21 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator (id=cblRowIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 78, column 35
    function value_45 () : TRVCost[] {
      return cblCosts.toTypedArray()
    }
    
    property get cbl () : Coverable {
      return getIteratedValue(2) as Coverable
    }
    
    property get cblCosts () : List<TRVCost> {
      return getVariableValue("cblCosts", 2) as List<TRVCost>
    }
    
    property set cblCosts ($arg :  List<TRVCost>) {
      setVariableValue("cblCosts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 64, column 26
    function sortBy_8 (cbl :  Coverable) : java.lang.Object {
      return cbl.FixedId
    }
    
    // 'value' attribute on PanelIterator (id=cblIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 56, column 33
    function value_47 () : Coverable[] {
      return cblByType.get(cblType).toTypedArray()
    }
    
    property get cblType () : gw.lang.reflect.IType {
      return getIteratedValue(1) as gw.lang.reflect.IType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingCumulDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 43, column 36
    function def_onEnter_5 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 43, column 36
    function def_refreshVariables_6 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 20, column 23
    function initialValue_0 () : TRVLine {
      return period.TRVLine
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 25, column 57
    function initialValue_1 () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return new gw.lob.trv.financials.TRVQuoteDisplayUtil(line, true)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 30, column 71
    function initialValue_2 () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return quoteDisplayUtil.getCoverablesWithCostsByType()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 35, column 57
    function initialValue_3 () : Map<Coverable, List<TRVCost>> {
      return quoteDisplayUtil.getCostsByCoverable()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.TRVLine.pcf: line 40, column 35
    function initialValue_4 () : List<TRVCost> {
      return costsByCbl.get(line)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 150, column 26
    function sortBy_50 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 153, column 26
    function sortBy_51 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.TRVLine.pcf: line 51, column 24
    function sortBy_7 (cblType :  gw.lang.reflect.IType) : java.lang.Object {
      return cblType.toString()
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 160, column 33
    function sortValue_52 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 165, column 47
    function sortValue_53 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 170, column 47
    function sortValue_54 (cost :  TRVCost) : java.lang.Object {
      return cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 175, column 51
    function sortValue_55 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=costEffDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 179, column 35
    function sortValue_56 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=costExpDate_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 183, column 35
    function sortValue_57 (cost :  TRVCost) : java.lang.Object {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costProration_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 189, column 33
    function sortValue_58 (cost :  TRVCost) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 195, column 57
    function sortValue_59 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // '$$sumValue' attribute on RowIterator (id=lineCostsIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 195, column 57
    function sumValueRoot_61 (cost :  TRVCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator (id=lineCostsIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 195, column 57
    function sumValue_60 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on PanelIterator (id=cblTypeIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 48, column 43
    function value_48 () : gw.lang.reflect.IType[] {
      return cblByType.Keys.where( \ t -> t != productmodel.TRVLine).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=lineCostsIterator) at RatingCumulDetailsPanelSet.TRVLine.pcf: line 147, column 31
    function value_84 () : TRVCost[] {
      return lineLevelCosts.toTypedArray()
    }
    
    // 'visible' attribute on DetailViewPanel at RatingCumulDetailsPanelSet.TRVLine.pcf: line 133, column 43
    function visible_49 () : java.lang.Boolean {
      return lineLevelCosts.Count>0
    }
    
    property get cblByType () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return getVariableValue("cblByType", 0) as Map<gw.lang.reflect.IType, List<Coverable>>
    }
    
    property set cblByType ($arg :  Map<gw.lang.reflect.IType, List<Coverable>>) {
      setVariableValue("cblByType", 0, $arg)
    }
    
    property get costsByCbl () : Map<Coverable, List<TRVCost>> {
      return getVariableValue("costsByCbl", 0) as Map<Coverable, List<TRVCost>>
    }
    
    property set costsByCbl ($arg :  Map<Coverable, List<TRVCost>>) {
      setVariableValue("costsByCbl", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getVariableValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get lineLevelCosts () : List<TRVCost> {
      return getVariableValue("lineLevelCosts", 0) as List<TRVCost>
    }
    
    property set lineLevelCosts ($arg :  List<TRVCost>) {
      setVariableValue("lineLevelCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.trv.financials.TRVQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.trv.financials.TRVQuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}