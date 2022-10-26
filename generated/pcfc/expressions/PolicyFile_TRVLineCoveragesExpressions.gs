package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policyfile/PolicyFile_TRVLineCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_TRVLineCoveragesExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policyfile/PolicyFile_TRVLineCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_TRVLineCoveragesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_TRVLineCoverages) at PolicyFile_TRVLineCoverages.pcf: line 10, column 75
    function afterEnter_7 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_TRVLineCoverages) at PolicyFile_TRVLineCoverages.pcf: line 10, column 75
    static function canVisit_8 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'parent' attribute on Page (id=PolicyFile_TRVLineCoverages) at PolicyFile_TRVLineCoverages.pcf: line 10, column 75
    static function parent_9 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_TRVLineCoverages {
      return super.CurrentLocation as pcf.PolicyFile_TRVLineCoverages
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policyfile/PolicyFile_TRVLineCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_TRVLineCoverages_ScreenExpressionsImpl extends PolicyFile_TRVLineCoveragesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_TRVLineCoverages.pcf: line 33, column 61
    function def_onEnter_1 (def :  pcf.TRVLineStandardCoveragesDV) : void {
      def.onEnter(line, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_TRVLineCoverages.pcf: line 42, column 96
    function def_onEnter_3 (def :  pcf.AdditionalCoveragesDV) : void {
      def.onEnter(line, new String[]{"TRVLineAddGrp"}, true)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PolicyFile_TRVLineCoverages.pcf: line 52, column 56
    function def_onEnter_5 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(line, new String[] {"TRVLineExclGrp", "TRVLineCondGrp"}, true)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_TRVLineCoverages.pcf: line 33, column 61
    function def_refreshVariables_2 (def :  pcf.TRVLineStandardCoveragesDV) : void {
      def.refreshVariables(line, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_TRVLineCoverages.pcf: line 42, column 96
    function def_refreshVariables_4 (def :  pcf.AdditionalCoveragesDV) : void {
      def.refreshVariables(line, new String[]{"TRVLineAddGrp"}, true)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PolicyFile_TRVLineCoverages.pcf: line 52, column 56
    function def_refreshVariables_6 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(line, new String[] {"TRVLineExclGrp", "TRVLineCondGrp"}, true)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_TRVLineCoverages.pcf: line 24, column 25
    function initialValue_0 () : TRVLine {
      return policyPeriod.TRVLine
    }
    
    property get line () : TRVLine {
      return getVariableValue("line", 1) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setVariableValue("line", 1, $arg)
    }
    
    
  }
  
  
}