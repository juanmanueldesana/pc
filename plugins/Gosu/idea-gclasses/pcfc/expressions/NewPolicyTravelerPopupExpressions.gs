package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/NewPolicyTravelerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPolicyTravelerPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/NewPolicyTravelerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPolicyTravelerPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (line :  TRVLine, contactType :  ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPolicyTravelerPopup.pcf: line 39, column 62
    function action_4 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(policyTraveler))
    }
    
    // 'beforeCommit' attribute on Popup (id=NewPolicyTravelerPopup) at NewPolicyTravelerPopup.pcf: line 12, column 100
    function beforeCommit_10 (pickedValue :  PolicyTraveler) : void {
      policyTraveler.resetContactAndRoles(duplicateContactsPopupHelper.existingPCContactWithABContactMatch);
    }
    
    // 'def' attribute on PanelRef at NewPolicyTravelerPopup.pcf: line 45, column 67
    function def_onEnter_8 (def :  pcf.NewContactTravelerDetailsCV) : void {
      def.onEnter(policyTraveler, false)
    }
    
    // 'def' attribute on PanelRef at NewPolicyTravelerPopup.pcf: line 45, column 67
    function def_refreshVariables_9 (def :  pcf.NewContactTravelerDetailsCV) : void {
      def.refreshVariables(policyTraveler, false)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyTravelerPopup.pcf: line 24, column 69
    function initialValue_0 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(policyTraveler.AccountContactRole.AccountContact.Contact, existingContacts)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyTravelerPopup.pcf: line 28, column 30
    function initialValue_1 () : PolicyTraveler {
      return line.addNewPolicyTravelerOfContactType(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyTravelerPopup.pcf: line 32, column 25
    function initialValue_2 () : Contact[] {
      return line.PolicyTravelers.map(\elt -> elt.AccountContactRole.AccountContact.Contact)
    }
    
    // EditButtons at NewPolicyTravelerPopup.pcf: line 42, column 72
    function label_7 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewPolicyTravelerPopup.pcf: line 42, column 72
    function pickValue_5 () : PolicyTraveler {
      return policyTraveler
    }
    
    // 'title' attribute on Popup (id=NewPolicyTravelerPopup) at NewPolicyTravelerPopup.pcf: line 12, column 100
    static function title_11 (contactType :  ContactType, line :  TRVLine) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", Traveler.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewPolicyTravelerPopup.pcf: line 39, column 62
    function visible_3 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewPolicyTravelerPopup.pcf: line 42, column 72
    function visible_6 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewPolicyTravelerPopup {
      return super.CurrentLocation as pcf.NewPolicyTravelerPopup
    }
    
    property get contactType () : ContactType {
      return getVariableValue("contactType", 0) as ContactType
    }
    
    property set contactType ($arg :  ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get existingContacts () : Contact[] {
      return getVariableValue("existingContacts", 0) as Contact[]
    }
    
    property set existingContacts ($arg :  Contact[]) {
      setVariableValue("existingContacts", 0, $arg)
    }
    
    property get line () : entity.TRVLine {
      return getVariableValue("line", 0) as entity.TRVLine
    }
    
    property set line ($arg :  entity.TRVLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyTraveler () : PolicyTraveler {
      return getVariableValue("policyTraveler", 0) as PolicyTraveler
    }
    
    property set policyTraveler ($arg :  PolicyTraveler) {
      setVariableValue("policyTraveler", 0, $arg)
    }
    
    
  }
  
  
}