package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVCoverCoveragesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TRVCoverCoveragesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_10 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_12 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_16 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_18 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_2 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_24 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_26 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_28 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_30 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_4 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_3 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_5 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, item, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at TRVCoverCoveragesDV.pcf: line 30, column 44
    function mode_32 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVCoverCoveragesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TRVCoverCoveragesDV.pcf: line 17, column 51
    function initialValue_0 () : gw.api.productmodel.ClausePattern[] {
      return item != null ? item.PolicyLine.Pattern.getCoverageCategoryByPublicId("TRVCoverStndGrp").coveragePatternsForEntity(TRVCover).whereSelectedOrAvailable(item, openForEdit) : null
    }
    
    // 'sortBy' attribute on IteratorSort at TRVCoverCoveragesDV.pcf: line 27, column 26
    function sortBy_1 (coveragePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=CovCategoryIterator) at TRVCoverCoveragesDV.pcf: line 24, column 57
    function value_33 () : gw.api.productmodel.ClausePattern[] {
      return covPatterns
    }
    
    property get covPatterns () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("covPatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set covPatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("covPatterns", 0, $arg)
    }
    
    property get item () : TRVCover {
      return getRequireValue("item", 0) as TRVCover
    }
    
    property set item ($arg :  TRVCover) {
      setRequireValue("item", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}