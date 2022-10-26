package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/job/LineWizardStepSet.TravelInsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_TravelInsuranceExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/job/LineWizardStepSet.TravelInsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.TravelInsurance.pcf: line 24, column 73
    function beforeSave_0 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=LineCoverages) at LineWizardStepSet.TravelInsurance.pcf: line 30, column 78
    function onEnter_4 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.sync(policyPeriod.TRVLine.AllCoverables, policyPeriod.TRVLine.AllModifiables, null, policyPeriod, jobWizardHelper) }
    }
    
    // 'save' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.TravelInsurance.pcf: line 24, column 73
    function save_1 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.TravelInsurance.pcf: line 24, column 73
    function screen_onEnter_2 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.TRVLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=LineCoverages) at LineWizardStepSet.TravelInsurance.pcf: line 30, column 78
    function screen_onEnter_6 (def :  pcf.TRVLineCoveragesScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=TRVCover) at LineWizardStepSet.TravelInsurance.pcf: line 35, column 82
    function screen_onEnter_9 (def :  pcf.TRVCoverScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=TRVCover) at LineWizardStepSet.TravelInsurance.pcf: line 35, column 82
    function screen_refreshVariables_10 (def :  pcf.TRVCoverScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.TravelInsurance.pcf: line 24, column 73
    function screen_refreshVariables_3 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.TRVLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=LineCoverages) at LineWizardStepSet.TravelInsurance.pcf: line 30, column 78
    function screen_refreshVariables_7 (def :  pcf.TRVLineCoveragesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
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