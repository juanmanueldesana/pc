package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVLineCoveragesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVLineCoveragesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVLineCoveragesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVLineCoveragesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 29, column 60
    function def_onEnter_20 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 35, column 65
    function def_onEnter_22 (def :  pcf.TRVLineStandardCoveragesDV) : void {
      def.onEnter(line, openForEdit)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 44, column 100
    function def_onEnter_24 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(line, new String[]{"TRVLineAddGrp"}, true)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at TRVLineCoveragesScreen.pcf: line 55, column 54
    function def_onEnter_26 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(line, new String[] {"TRVLineExclGrp", "TRVLineCondGrp"}, true)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 29, column 60
    function def_refreshVariables_21 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 35, column 65
    function def_refreshVariables_23 (def :  pcf.TRVLineStandardCoveragesDV) : void {
      def.refreshVariables(line, openForEdit)
    }
    
    // 'def' attribute on PanelRef at TRVLineCoveragesScreen.pcf: line 44, column 100
    function def_refreshVariables_25 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(line, new String[]{"TRVLineAddGrp"}, true)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at TRVLineCoveragesScreen.pcf: line 55, column 54
    function def_refreshVariables_27 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(line, new String[] {"TRVLineExclGrp", "TRVLineCondGrp"}, true)
    }
    
    // 'editable' attribute on Screen (id=TRVLineCoveragesScreen) at TRVLineCoveragesScreen.pcf: line 7, column 33
    function editable_28 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at TRVLineCoveragesScreen.pcf: line 20, column 23
    function initialValue_0 () : TRVLine {
      return policyPeriod.TRVLine
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at TRVLineCoveragesScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
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
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}