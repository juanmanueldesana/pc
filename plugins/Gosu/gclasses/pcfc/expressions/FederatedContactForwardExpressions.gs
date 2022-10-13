package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedContactForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedContactForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountPublicId :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 42
    function action_2 () : void {
      ContactForward.go(contactEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 25, column 42
    function action_5 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.contactForward(accountPublicId)
    }
    
    // 'action' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(contactEntity)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactForward.pcf: line 22, column 42
    function condition_4 () : java.lang.Boolean {
      return contactEntity != null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedContactForward.pcf: line 25, column 42
    function condition_6 () : java.lang.Boolean {
      return contactEntity == null
    }
    
    // 'initialValue' attribute on Variable at FederatedContactForward.pcf: line 15, column 23
    function initialValue_0 () : Account {
      return Account.finder.findAccountByPublicId(accountPublicId)
    }
    
    // 'initialValue' attribute on Variable at FederatedContactForward.pcf: line 19, column 23
    function initialValue_1 () : Contact {
      return accountEntity!=null?accountEntity.AccountHolderContact:null
    }
    
    override property get CurrentLocation () : pcf.FederatedContactForward {
      return super.CurrentLocation as pcf.FederatedContactForward
    }
    
    property get accountEntity () : Account {
      return getVariableValue("accountEntity", 0) as Account
    }
    
    property set accountEntity ($arg :  Account) {
      setVariableValue("accountEntity", 0, $arg)
    }
    
    property get accountPublicId () : java.lang.String {
      return getVariableValue("accountPublicId", 0) as java.lang.String
    }
    
    property set accountPublicId ($arg :  java.lang.String) {
      setVariableValue("accountPublicId", 0, $arg)
    }
    
    property get contactEntity () : Contact {
      return getVariableValue("contactEntity", 0) as Contact
    }
    
    property set contactEntity ($arg :  Contact) {
      setVariableValue("contactEntity", 0, $arg)
    }
    
    
  }
  
  
}