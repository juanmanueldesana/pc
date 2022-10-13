package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFinished_acc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardFinished_accExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFinished_acc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardFinished_accExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnLink_Input) at NPGWizardFinished_acc.pcf: line 20, column 105
    function action_0 () : void {
      NPGNewProductGenerator_acc.go()
    }
    
    // 'action' attribute on BulletPointTextInput (id=StartWizardLink_Input) at NPGWizardFinished_acc.pcf: line 24, column 93
    function action_2 () : void {
      NPG_accWizard.go()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnLink_Input) at NPGWizardFinished_acc.pcf: line 20, column 105
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NPGNewProductGenerator_acc.createDestination()
    }
    
    // 'action' attribute on BulletPointTextInput (id=StartWizardLink_Input) at NPGWizardFinished_acc.pcf: line 24, column 93
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NPG_accWizard.createDestination()
    }
    
    // 'parent' attribute on Page (id=NPGWizardFinished_acc) at NPGWizardFinished_acc.pcf: line 10, column 74
    static function parent_4 () : pcf.api.Destination {
      return pcf.NPGNewProductGenerator_acc.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NPGWizardFinished_acc {
      return super.CurrentLocation as pcf.NPGWizardFinished_acc
    }
    
    
  }
  
  
}