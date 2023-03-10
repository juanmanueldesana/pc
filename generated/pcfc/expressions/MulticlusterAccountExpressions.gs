package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterAccountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String, accountNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterAccount {
      return super.CurrentLocation as pcf.MulticlusterAccount
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}