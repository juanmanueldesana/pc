package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPG_accWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPG_accWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPG_accWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPG_accWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function afterCancel_12 () : void {
      NPGNewProductGenerator_acc.go()
    }
    
    // 'afterCancel' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function afterCancel_dest_13 () : pcf.api.Destination {
      return pcf.NPGNewProductGenerator_acc.createDestination()
    }
    
    // 'afterFinish' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function afterFinish_18 () : void {
      NPGWizardFinished_acc.go()
    }
    
    // 'afterFinish' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function afterFinish_dest_19 () : pcf.api.Destination {
      return pcf.NPGWizardFinished_acc.createDestination()
    }
    
    // 'allowFinish' attribute on WizardStep (id=Summary) at NPG_accWizard.pcf: line 50, column 85
    function allowFinish_9 () : java.lang.Boolean {
      return wizardDataUtil.IsValid
    }
    
    // 'beforeCommit' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function beforeCommit_14 (pickedValue :  java.lang.Object) : void {
      wizardDataUtil.process()
    }
    
    // 'canVisit' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    static function canVisit_15 () : java.lang.Boolean {
      return perm.User.importadmindata
    }
    
    // 'initialValue' attribute on Variable at NPG_accWizard.pcf: line 20, column 58
    function initialValue_0 () : gw.acc.npg.wizard.WizardProductLineCreator {
      return new gw.acc.npg.wizard.WizardProductLineCreator()
    }
    
    // 'screen' attribute on WizardStep (id=ProductAndLine) at NPG_accWizard.pcf: line 26, column 92
    function screen_onEnter_1 (def :  pcf.NPGWizardProductAndLine_accScreen) : void {
      def.onEnter(wizardDataUtil.getProductInfoStepDTO())
    }
    
    // 'screen' attribute on WizardStep (id=Summary) at NPG_accWizard.pcf: line 50, column 85
    function screen_onEnter_10 (def :  pcf.NPGWizardSummary_accScreen) : void {
      def.onEnter(wizardDataUtil)
    }
    
    // 'screen' attribute on WizardStep (id=Coverables) at NPG_accWizard.pcf: line 32, column 88
    function screen_onEnter_3 (def :  pcf.NPGWizardCoverables_accScreen) : void {
      def.onEnter(wizardDataUtil.getCoverableStepDTOs())
    }
    
    // 'screen' attribute on WizardStep (id=Costs) at NPG_accWizard.pcf: line 38, column 83
    function screen_onEnter_5 (def :  pcf.NPGWizardCosts_accScreen) : void {
      def.onEnter(wizardDataUtil.getCostsStepDTOs())
    }
    
    // 'screen' attribute on WizardStep (id=OtherEntities) at NPG_accWizard.pcf: line 44, column 91
    function screen_onEnter_7 (def :  pcf.NPGWizardOtherEntities_accScreen) : void {
      def.onEnter(wizardDataUtil.getOtherEntitiesStepDTOs())
    }
    
    // 'screen' attribute on WizardStep (id=Summary) at NPG_accWizard.pcf: line 50, column 85
    function screen_refreshVariables_11 (def :  pcf.NPGWizardSummary_accScreen) : void {
      def.refreshVariables(wizardDataUtil)
    }
    
    // 'screen' attribute on WizardStep (id=ProductAndLine) at NPG_accWizard.pcf: line 26, column 92
    function screen_refreshVariables_2 (def :  pcf.NPGWizardProductAndLine_accScreen) : void {
      def.refreshVariables(wizardDataUtil.getProductInfoStepDTO())
    }
    
    // 'screen' attribute on WizardStep (id=Coverables) at NPG_accWizard.pcf: line 32, column 88
    function screen_refreshVariables_4 (def :  pcf.NPGWizardCoverables_accScreen) : void {
      def.refreshVariables(wizardDataUtil.getCoverableStepDTOs())
    }
    
    // 'screen' attribute on WizardStep (id=Costs) at NPG_accWizard.pcf: line 38, column 83
    function screen_refreshVariables_6 (def :  pcf.NPGWizardCosts_accScreen) : void {
      def.refreshVariables(wizardDataUtil.getCostsStepDTOs())
    }
    
    // 'screen' attribute on WizardStep (id=OtherEntities) at NPG_accWizard.pcf: line 44, column 91
    function screen_refreshVariables_8 (def :  pcf.NPGWizardOtherEntities_accScreen) : void {
      def.refreshVariables(wizardDataUtil.getOtherEntitiesStepDTOs())
    }
    
    // 'tabBar' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function tabBar_onEnter_16 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on Wizard (id=NPG_accWizard) at NPG_accWizard.pcf: line 14, column 28
    function tabBar_refreshVariables_17 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.NPG_accWizard {
      return super.CurrentLocation as pcf.NPG_accWizard
    }
    
    property get wizardDataUtil () : gw.acc.npg.wizard.WizardProductLineCreator {
      return getVariableValue("wizardDataUtil", 0) as gw.acc.npg.wizard.WizardProductLineCreator
    }
    
    property set wizardDataUtil ($arg :  gw.acc.npg.wizard.WizardProductLineCreator) {
      setVariableValue("wizardDataUtil", 0, $arg)
    }
    
    
  }
  
  
}