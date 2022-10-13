package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizard_accDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizard_accDVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizard_accDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizard_accDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=NPGWizardStarter_Input) at NPGWizard_accDV.pcf: line 11, column 85
    function action_0 () : void {
      NPG_accWizard.go()
    }
    
    // 'action' attribute on ButtonInput (id=NPGWizardStarter_Input) at NPGWizard_accDV.pcf: line 11, column 85
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NPG_accWizard.createDestination()
    }
    
    
  }
  
  
}