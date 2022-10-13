package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGNewProductGenerator_acc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGNewProductGenerator_accExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGNewProductGenerator_acc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGNewProductGenerator_accExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=NPGNewProductGenerator_acc) at NPGNewProductGenerator_acc.pcf: line 9, column 74
    static function parent_9 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NPGNewProductGenerator_acc {
      return super.CurrentLocation as pcf.NPGNewProductGenerator_acc
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGNewProductGenerator_acc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends NPGNewProductGenerator_accExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NPGNewProductGenerator_acc.pcf: line 31, column 30
    function def_onEnter_4 (def :  pcf.NPGImport_accDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at NPGNewProductGenerator_acc.pcf: line 34, column 34
    function def_onEnter_7 (def :  pcf.NPGWizard_accDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at NPGNewProductGenerator_acc.pcf: line 31, column 30
    function def_refreshVariables_5 (def :  pcf.NPGImport_accDV) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at NPGNewProductGenerator_acc.pcf: line 34, column 34
    function def_refreshVariables_8 (def :  pcf.NPGWizard_accDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on BooleanRadioInput (id=GenerationApproach_Input) at NPGNewProductGenerator_acc.pcf: line 24, column 31
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      xmlImport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=GenerationApproach_Input) at NPGNewProductGenerator_acc.pcf: line 24, column 31
    function value_0 () : java.lang.Boolean {
      return xmlImport
    }
    
    // 'visible' attribute on PanelRef at NPGNewProductGenerator_acc.pcf: line 34, column 34
    function visible_6 () : java.lang.Boolean {
      return not xmlImport
    }
    
    property get xmlImport () : boolean {
      return getVariableValue("xmlImport", 1) as java.lang.Boolean
    }
    
    property set xmlImport ($arg :  boolean) {
      setVariableValue("xmlImport", 1, $arg)
    }
    
    
  }
  
  
}