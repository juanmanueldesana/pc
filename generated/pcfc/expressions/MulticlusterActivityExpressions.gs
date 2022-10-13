package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterActivity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterActivityExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterActivity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterActivityExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shardUrl :  String, activityPublicId :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterActivity {
      return super.CurrentLocation as pcf.MulticlusterActivity
    }
    
    property get activityPublicId () : String {
      return getVariableValue("activityPublicId", 0) as String
    }
    
    property set activityPublicId ($arg :  String) {
      setVariableValue("activityPublicId", 0, $arg)
    }
    
    property get shardUrl () : String {
      return getVariableValue("shardUrl", 0) as String
    }
    
    property set shardUrl ($arg :  String) {
      setVariableValue("shardUrl", 0, $arg)
    }
    
    
  }
  
  
}