package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyChangeWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyChangeWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function acceleratedMenuActions_onEnter_80 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(policyChange, policyPeriod, jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function acceleratedMenuActions_refreshVariables_81 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(policyChange, policyPeriod, jobWizardHelper)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function beforeSave_10 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function beforeSave_71 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function canEdit_82 () : java.lang.Boolean {
      return (not job.Complete) and perm.PolicyChange.edit(policyChange)
    }
    
    // 'canVisit' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    static function canVisit_83 (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyChange.view(policyChange)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_21 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_23 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_25 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_27 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_29 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_31 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_33 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_35 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_37 (def :  pcf.LineWizardStepSet_TravelInsurance) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_39 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_onEnter_41 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 141, column 77
    function def_onEnter_78 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_22 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_24 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_26 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_28 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_30 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_32 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_34 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_36 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_38 (def :  pcf.LineWizardStepSet_TravelInsurance) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_40 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function def_refreshVariables_42 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 141, column 77
    function def_refreshVariables_79 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function infoBar_onEnter_84 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(policyChange, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function infoBar_refreshVariables_85 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(policyChange, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function initialStep_94 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 35, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 40, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 45, column 30
    function initialValue_2 () : entity.Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 49, column 35
    function initialValue_3 () : entity.PolicyChange {
      return policyChange
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 54, column 29
    function initialValue_4 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 58, column 22
    function initialValue_5 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 62, column 46
    function initialValue_6 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 67, column 23
    function initialValue_7 () : boolean {
      return !policyPeriod.Promoted and perm.PolicyChange.edit(policyChange)
    }
    
    // 'initialValue' attribute on Variable at PolicyChangeWizard.pcf: line 71, column 65
    function initialValue_8 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'menuActions' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function menuActions_onEnter_86 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,policyChange,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function menuActions_refreshVariables_87 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,policyChange,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at PolicyChangeWizard.pcf: line 93, column 41
    function mode_43 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function mode_59 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function onConcurrentDataChange_88 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function onEnter_11 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at PolicyChangeWizard.pcf: line 90, column 80
    function onEnter_16 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyReview) at PolicyChangeWizard.pcf: line 107, column 74
    function onEnter_49 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function onEnter_72 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if (openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at PolicyChangeWizard.pcf: line 90, column 80
    function onExit_17 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at PolicyChangeWizard.pcf: line 101, column 151
    function onExit_45 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at PolicyChangeWizard.pcf: line 107, column 74
    function onExit_50 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at PolicyChangeWizard.pcf: line 114, column 42
    function onExit_54 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function onExit_60 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at PolicyChangeWizard.pcf: line 129, column 87
    function onExit_66 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function onExit_73 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    static function parent_89 (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyChange)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function save_13 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function save_74 () : java.lang.Boolean {
      return !policyPeriod.Promoted and perm.PolicyChange.edit(policyChange)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function screen_onEnter_14 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at PolicyChangeWizard.pcf: line 90, column 80
    function screen_onEnter_19 (def :  pcf.PolicyChangeWizard_PolicyInfoScreen) : void {
      def.onEnter(policyChange, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at PolicyChangeWizard.pcf: line 101, column 151
    function screen_onEnter_47 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at PolicyChangeWizard.pcf: line 107, column 74
    function screen_onEnter_51 (def :  pcf.PolicyChangeWizard_DifferencesScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at PolicyChangeWizard.pcf: line 114, column 42
    function screen_onEnter_55 (def :  pcf.PolicyChangeWizard_QuoteScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function screen_onEnter_61 (def :  pcf.PolicyChangeWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(policyChange, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function screen_onEnter_63 (def :  pcf.PolicyChangeWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(policyChange, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at PolicyChangeWizard.pcf: line 129, column 87
    function screen_onEnter_68 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function screen_onEnter_75 (def :  pcf.PolicyChangeWizard_PaymentScreen) : void {
      def.onEnter(policyChange, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function screen_refreshVariables_15 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at PolicyChangeWizard.pcf: line 90, column 80
    function screen_refreshVariables_20 (def :  pcf.PolicyChangeWizard_PolicyInfoScreen) : void {
      def.refreshVariables(policyChange, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at PolicyChangeWizard.pcf: line 101, column 151
    function screen_refreshVariables_48 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at PolicyChangeWizard.pcf: line 107, column 74
    function screen_refreshVariables_52 (def :  pcf.PolicyChangeWizard_DifferencesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at PolicyChangeWizard.pcf: line 114, column 42
    function screen_refreshVariables_56 (def :  pcf.PolicyChangeWizard_QuoteScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function screen_refreshVariables_62 (def :  pcf.PolicyChangeWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(policyChange, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function screen_refreshVariables_64 (def :  pcf.PolicyChangeWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(policyChange, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at PolicyChangeWizard.pcf: line 129, column 87
    function screen_refreshVariables_69 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function screen_refreshVariables_76 (def :  pcf.PolicyChangeWizard_PaymentScreen) : void {
      def.refreshVariables(policyChange, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function subtitle_93 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function tabBar_onEnter_90 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    function tabBar_refreshVariables_91 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=PolicyChangeWizard) at PolicyChangeWizard.pcf: line 22, column 94
    static function title_92 (policyChange :  PolicyChange, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.PolicyChangeWizard.Title", policyChange.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at PolicyChangeWizard.pcf: line 101, column 151
    function visible_44 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at PolicyChangeWizard.pcf: line 114, column 42
    function visible_53 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at PolicyChangeWizard.pcf: line 122, column 41
    function visible_58 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at PolicyChangeWizard.pcf: line 80, column 56
    function visible_9 () : java.lang.Boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at PolicyChangeWizard.pcf: line 114, column 42
    function wizardStepAvailable_57 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at PolicyChangeWizard.pcf: line 129, column 87
    function wizardStepAvailable_70 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at PolicyChangeWizard.pcf: line 139, column 75
    function wizardStepAvailable_77 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.PolicyChangeWizard {
      return super.CurrentLocation as pcf.PolicyChangeWizard
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get billingPageEditable () : boolean {
      return getVariableValue("billingPageEditable", 0) as java.lang.Boolean
    }
    
    property set billingPageEditable ($arg :  boolean) {
      setVariableValue("billingPageEditable", 0, $arg)
    }
    
    property get job () : entity.PolicyChange {
      return getVariableValue("job", 0) as entity.PolicyChange
    }
    
    property set job ($arg :  entity.PolicyChange) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get policy () : entity.Policy {
      return getVariableValue("policy", 0) as entity.Policy
    }
    
    property set policy ($arg :  entity.Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyChange () : PolicyChange {
      return getVariableValue("policyChange", 0) as PolicyChange
    }
    
    property set policyChange ($arg :  PolicyChange) {
      setVariableValue("policyChange", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getVariableValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setVariableValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get productCode () : String {
      return getVariableValue("productCode", 0) as String
    }
    
    property set productCode ($arg :  String) {
      setVariableValue("productCode", 0, $arg)
    }
    
    
  }
  
  
}