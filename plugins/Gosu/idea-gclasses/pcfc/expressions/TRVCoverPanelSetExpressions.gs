package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVCoverPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverableListDetailPanelExpressionsImpl extends TRVCoverPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 95, column 40
    function def_onEnter_20 (def :  pcf.NewContactTravelerDetailsCV) : void {
      def.onEnter(selectedItem, false)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 95, column 40
    function def_refreshVariables_21 (def :  pcf.NewContactTravelerDetailsCV) : void {
      def.refreshVariables(selectedItem, false)
    }
    
    // 'editable' attribute on RowIterator (id=TravelerIterator) at TRVCoverPanelSet.pcf: line 61, column 49
    function editable_7 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'sortBy' attribute on TextCell (id=FirstName_Cell) at TRVCoverPanelSet.pcf: line 72, column 29
    function sortValue_4 (item :  entity.PolicyTraveler) : java.lang.Object {
      return item.FixedId
    }
    
    // 'sortBy' attribute on TextCell (id=LastName_Cell) at TRVCoverPanelSet.pcf: line 80, column 29
    function sortValue_5 (item :  entity.PolicyTraveler) : java.lang.Object {
      return item.FixedId
    }
    
    // 'sortBy' attribute on TextCell (id=Genre_Cell) at TRVCoverPanelSet.pcf: line 88, column 29
    function sortValue_6 (item :  entity.PolicyTraveler) : java.lang.Object {
      return item.FixedId
    }
    
    // 'toRemove' attribute on RowIterator (id=TravelerIterator) at TRVCoverPanelSet.pcf: line 61, column 49
    function toRemove_17 (item :  entity.PolicyTraveler) : void {
      line.removeFromPolicyTravelers(item)
    }
    
    // 'value' attribute on RowIterator (id=TravelerIterator) at TRVCoverPanelSet.pcf: line 61, column 49
    function value_18 () : entity.PolicyTraveler[] {
      return line.PolicyTravelers
    }
    
    // 'value' attribute on AddMenuItemIterator at TRVCoverPanelSet.pcf: line 40, column 49
    function value_3 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYTRAVELER)
    }
    
    // 'visible' attribute on PanelRef at TRVCoverPanelSet.pcf: line 95, column 40
    function visible_19 () : java.lang.Boolean {
      return selectedItem != null
    }
    
    property get selectedItem () : PolicyTraveler {
      return getCurrentSelection(1) as PolicyTraveler
    }
    
    property set selectedItem ($arg :  PolicyTraveler) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CoverableListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Genre_Cell) at TRVCoverPanelSet.pcf: line 88, column 29
    function valueRoot_15 () : java.lang.Object {
      return (item.AccountContactRole as Traveler).Genre
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at TRVCoverPanelSet.pcf: line 72, column 29
    function valueRoot_9 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextCell (id=LastName_Cell) at TRVCoverPanelSet.pcf: line 80, column 29
    function value_11 () : java.lang.String {
      return item.LastName
    }
    
    // 'value' attribute on TextCell (id=Genre_Cell) at TRVCoverPanelSet.pcf: line 88, column 29
    function value_14 () : java.lang.String {
      return (item.AccountContactRole as Traveler).Genre.DisplayName
    }
    
    // 'value' attribute on TextCell (id=FirstName_Cell) at TRVCoverPanelSet.pcf: line 72, column 29
    function value_8 () : java.lang.String {
      return item.FirstName
    }
    
    property get item () : entity.PolicyTraveler {
      return getIteratedValue(2) as entity.PolicyTraveler
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverableListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at TRVCoverPanelSet.pcf: line 45, column 80
    function label_1 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at TRVCoverPanelSet.pcf: line 45, column 80
    function pickLocation_2 () : void {
      NewPolicyTravelerPopup.push(line, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(2) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVCoverPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TRVCoverPanelSet.pcf: line 22, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getRequireValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
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