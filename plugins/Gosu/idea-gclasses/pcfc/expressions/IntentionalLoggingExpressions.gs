package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntentionalLoggingExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntentionalLoggingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=globalButtonOn) at IntentionalLogging.pcf: line 35, column 101
    function action_3 () : void {
      IntentionalLoggingData.setGlobalState(true)
    }
    
    // 'action' attribute on ToolbarButton (id=globalButtonOff) at IntentionalLogging.pcf: line 41, column 102
    function action_5 () : void {
      IntentionalLoggingData.setGlobalState(false)
    }
    
    // 'available' attribute on ToolbarButton (id=globalButtonOn) at IntentionalLogging.pcf: line 35, column 101
    function available_2 () : java.lang.Boolean {
      return IntentionalLoggingData.shouldGlobalOnButtonBeVisible()
    }
    
    // 'available' attribute on ToolbarButton (id=globalButtonOff) at IntentionalLogging.pcf: line 41, column 102
    function available_4 () : java.lang.Boolean {
      return IntentionalLoggingData.shouldGlobalOffButtonBeVisible()
    }
    
    // 'canVisit' attribute on Page (id=IntentionalLogging) at IntentionalLogging.pcf: line 13, column 78
    static function canVisit_27 () : java.lang.Boolean {
      return perm.User.EditLog or perm.User.DevAllAccess
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 19, column 49
    function initialValue_0 () : gw.api.tools.IntentionalLoggingUI {
      return new gw.api.tools.IntentionalLoggingUI()
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 24, column 63
    function initialValue_1 () : gw.api.intentionallogging.ILElementIdentifier[] {
      return IntentionalLoggingData.AvailableILElementIdentifiers.toTypedArray()
    }
    
    // 'parent' attribute on Page (id=IntentionalLogging) at IntentionalLogging.pcf: line 13, column 78
    static function parent_28 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function sortValue_6 (IntentionalLoggingRow :  gw.api.intentionallogging.ILElementIdentifier) : java.lang.Object {
      return IntentionalLoggingRow.Name
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at IntentionalLogging.pcf: line 85, column 64
    function sortValue_7 (IntentionalLoggingRow :  gw.api.intentionallogging.ILElementIdentifier) : java.lang.Object {
      return IntentionalLoggingRow.Type.toString()
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at IntentionalLogging.pcf: line 90, column 97
    function sortValue_8 (IntentionalLoggingRow :  gw.api.intentionallogging.ILElementIdentifier) : java.lang.Object {
      var turnOnEnabled : boolean = (IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow))
var turnOffEnabled : boolean = (IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow))
var isEnabled : boolean = (IntentionalLoggingData.isEnabled(IntentionalLoggingRow))
return isEnabled ? DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOn")                  : DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOff")
    }
    
    // 'value' attribute on RowIterator (id=IntentionalLoggingRowIterator) at IntentionalLogging.pcf: line 58, column 73
    function value_26 () : gw.api.intentionallogging.ILElementIdentifier[] {
      return ILElementIdentifiers
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at IntentionalLogging.pcf: line 94, column 74
    function visible_9 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    override property get CurrentLocation () : pcf.IntentionalLogging {
      return super.CurrentLocation as pcf.IntentionalLogging
    }
    
    property get ILElementIdentifiers () : gw.api.intentionallogging.ILElementIdentifier[] {
      return getVariableValue("ILElementIdentifiers", 0) as gw.api.intentionallogging.ILElementIdentifier[]
    }
    
    property set ILElementIdentifiers ($arg :  gw.api.intentionallogging.ILElementIdentifier[]) {
      setVariableValue("ILElementIdentifiers", 0, $arg)
    }
    
    property get IntentionalLoggingData () : gw.api.tools.IntentionalLoggingUI {
      return getVariableValue("IntentionalLoggingData", 0) as gw.api.tools.IntentionalLoggingUI
    }
    
    property set IntentionalLoggingData ($arg :  gw.api.tools.IntentionalLoggingUI) {
      setVariableValue("IntentionalLoggingData", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IntentionalLoggingExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Start) at IntentionalLogging.pcf: line 100, column 44
    function action_21 () : void {
      IntentionalLoggingData.updateIntentionalLoggingSettings(IntentionalLoggingRow, true)
    }
    
    // 'action' attribute on Link (id=Stop) at IntentionalLogging.pcf: line 106, column 44
    function action_23 () : void {
      IntentionalLoggingData.updateIntentionalLoggingSettings(IntentionalLoggingRow, false)
    }
    
    // 'available' attribute on Link (id=Start) at IntentionalLogging.pcf: line 100, column 44
    function available_20 () : java.lang.Boolean {
      return turnOnEnabled
    }
    
    // 'available' attribute on Link (id=Stop) at IntentionalLogging.pcf: line 106, column 44
    function available_22 () : java.lang.Boolean {
      return turnOffEnabled
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 63, column 31
    function initialValue_10 () : boolean {
      return IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow)
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 68, column 31
    function initialValue_11 () : boolean {
      return IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow)
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 73, column 31
    function initialValue_12 () : boolean {
      return IntentionalLoggingData.isEnabled(IntentionalLoggingRow)
    }
    
    // RowIterator (id=IntentionalLoggingRowIterator) at IntentionalLogging.pcf: line 58, column 73
    function initializeVariables_25 () : void {
        turnOnEnabled = IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow);
  turnOffEnabled = IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow);
  isEnabled = IntentionalLoggingData.isEnabled(IntentionalLoggingRow);

    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function valueRoot_14 () : java.lang.Object {
      return IntentionalLoggingRow
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function value_13 () : java.lang.String {
      return IntentionalLoggingRow.Name
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at IntentionalLogging.pcf: line 85, column 64
    function value_16 () : java.lang.String {
      return IntentionalLoggingRow.Type.toString()
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at IntentionalLogging.pcf: line 90, column 97
    function value_18 () : java.lang.String {
      return isEnabled ? DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOn")                  : DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOff")
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at IntentionalLogging.pcf: line 94, column 74
    function visible_24 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    property get IntentionalLoggingRow () : gw.api.intentionallogging.ILElementIdentifier {
      return getIteratedValue(1) as gw.api.intentionallogging.ILElementIdentifier
    }
    
    property get isEnabled () : boolean {
      return getVariableValue("isEnabled", 1) as java.lang.Boolean
    }
    
    property set isEnabled ($arg :  boolean) {
      setVariableValue("isEnabled", 1, $arg)
    }
    
    property get turnOffEnabled () : boolean {
      return getVariableValue("turnOffEnabled", 1) as java.lang.Boolean
    }
    
    property set turnOffEnabled ($arg :  boolean) {
      setVariableValue("turnOffEnabled", 1, $arg)
    }
    
    property get turnOnEnabled () : boolean {
      return getVariableValue("turnOnEnabled", 1) as java.lang.Boolean
    }
    
    property set turnOnEnabled ($arg :  boolean) {
      setVariableValue("turnOnEnabled", 1, $arg)
    }
    
    
  }
  
  
}