package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleManagementAuditPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RuleManagementAuditPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ActivityHeader_Cell) at RuleManagementAuditPopup.pcf: line 142, column 51
    function valueRoot_44 () : java.lang.Object {
      return activityType
    }
    
    // 'value' attribute on TextCell (id=ActivityHeader_Cell) at RuleManagementAuditPopup.pcf: line 142, column 51
    function value_43 () : java.lang.String {
      return activityType.DisplayName
    }
    
    property get activityType () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleManagementAuditController.ActivityType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends RuleManagementAuditPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get activityType () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleManagementAuditController.ActivityType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends RuleManagementAuditPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RuleManagementAuditPopup.pcf: line 196, column 62
    function valueRoot_51 () : java.lang.Object {
      return aggregateActivity.Version.Rule
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at RuleManagementAuditPopup.pcf: line 193, column 80
    function value_48 () : java.lang.String {
      return controller.getVersionLabel(aggregateActivity.Version)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RuleManagementAuditPopup.pcf: line 196, column 62
    function value_50 () : java.lang.String {
      return aggregateActivity.Version.Rule.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=AvailableToRun_Cell) at RuleManagementAuditPopup.pcf: line 203, column 72
    function value_53 () : java.lang.Boolean {
      return aggregateActivity.Version.Rule.AvailableToRun
    }
    
    // 'value' attribute on CellIterator at RuleManagementAuditPopup.pcf: line 207, column 90
    function value_65 () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType[] {
      return activityTypes
    }
    
    property get aggregateActivity () : gw.bizrules.pcf.RuleManagementAuditController.AggregateEntry {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleManagementAuditController.AggregateEntry
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at RuleManagementAuditPopup.pcf: line 214, column 89
    function valueRoot_57 () : java.lang.Object {
      return aggregateActivity.getActivityByType(activityType)
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at RuleManagementAuditPopup.pcf: line 214, column 89
    function value_56 () : java.util.Date {
      return aggregateActivity.getActivityByType(activityType)?.Timestamp
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at RuleManagementAuditPopup.pcf: line 218, column 88
    function value_59 () : java.lang.String {
      return aggregateActivity.getActivityByType(activityType)?.UserName
    }
    
    // 'value' attribute on TextCell (id=SystemId_Cell) at RuleManagementAuditPopup.pcf: line 222, column 88
    function value_62 () : java.lang.String {
      return aggregateActivity.getActivityByType(activityType)?.SystemId
    }
    
    property get activityType () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType {
      return getIteratedValue(2) as gw.bizrules.pcf.RuleManagementAuditController.ActivityType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleManagementAuditPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Activity_Cell) at RuleManagementAuditPopup.pcf: line 83, column 60
    function valueRoot_25 () : java.lang.Object {
      return activity.ActivityType
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at RuleManagementAuditPopup.pcf: line 91, column 45
    function valueRoot_28 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Activity_Cell) at RuleManagementAuditPopup.pcf: line 83, column 60
    function value_24 () : java.lang.String {
      return activity.ActivityType.DisplayName
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at RuleManagementAuditPopup.pcf: line 91, column 45
    function value_27 () : java.util.Date {
      return activity.Timestamp
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at RuleManagementAuditPopup.pcf: line 97, column 44
    function value_30 () : java.lang.String {
      return activity.UserName
    }
    
    // 'value' attribute on TextCell (id=SystemId_Cell) at RuleManagementAuditPopup.pcf: line 103, column 44
    function value_33 () : java.lang.String {
      return activity.SystemId
    }
    
    // 'value' attribute on TextCell (id=ImportDate_Cell) at RuleManagementAuditPopup.pcf: line 109, column 71
    function value_36 () : java.lang.String {
      return activity.getImportTimeAsString(SHORT, SHORT)
    }
    
    // 'value' attribute on TextCell (id=ImportUser_Cell) at RuleManagementAuditPopup.pcf: line 115, column 54
    function value_38 () : java.lang.String {
      return activity.ImportUserAsString
    }
    
    property get activity () : gw.bizrules.pcf.RuleManagementAuditController.Activity {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleManagementAuditController.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleManagementAuditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleManagementAuditPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (controller :  gw.bizrules.pcf.RuleManagementAuditController, initialVersion :  RuleVersion) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleManagementAuditPopup.pcf: line 47, column 63
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      historyHolder.SelectedVersion.Rule.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AvailableToRun_Input) at RuleManagementAuditPopup.pcf: line 53, column 73
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      historyHolder.SelectedVersion.Rule.AvailableToRun = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      historyHolder.SelectedVersion = (__VALUE_TO_SET as RuleVersion)
    }
    
    // 'initialValue' attribute on Variable at RuleManagementAuditPopup.pcf: line 19, column 49
    function initialValue_0 () : gw.bizrules.pcf.RuleHistoryHolder {
      return controller.createHistoryHolder(initialVersion)
    }
    
    // 'initialValue' attribute on Variable at RuleManagementAuditPopup.pcf: line 23, column 76
    function initialValue_1 () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType[] {
      return controller.OrderedActivityTypes.reverse().toTypedArray()
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function optionLabel_5 (VALUE :  RuleVersion) : java.lang.String {
      return controller.getVersionLabel(VALUE)
    }
    
    // 'value' attribute on TextCell (id=Activity_Cell) at RuleManagementAuditPopup.pcf: line 83, column 60
    function sortValue_18 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.ActivityType.DisplayName
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at RuleManagementAuditPopup.pcf: line 91, column 45
    function sortValue_19 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.Timestamp
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at RuleManagementAuditPopup.pcf: line 97, column 44
    function sortValue_20 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.UserName
    }
    
    // 'value' attribute on TextCell (id=SystemId_Cell) at RuleManagementAuditPopup.pcf: line 103, column 44
    function sortValue_21 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.SystemId
    }
    
    // 'value' attribute on TextCell (id=ImportDate_Cell) at RuleManagementAuditPopup.pcf: line 109, column 71
    function sortValue_22 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.getImportTimeAsString(SHORT, SHORT)
    }
    
    // 'value' attribute on TextCell (id=ImportUser_Cell) at RuleManagementAuditPopup.pcf: line 115, column 54
    function sortValue_23 (activity :  gw.bizrules.pcf.RuleManagementAuditController.Activity) : java.lang.Object {
      return activity.ImportUserAsString
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function valueRange_6 () : java.lang.Object {
      return historyHolder.AllVersions
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleManagementAuditPopup.pcf: line 47, column 63
    function valueRoot_12 () : java.lang.Object {
      return historyHolder.SelectedVersion.Rule
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function valueRoot_4 () : java.lang.Object {
      return historyHolder
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleManagementAuditPopup.pcf: line 47, column 63
    function value_10 () : java.lang.String {
      return historyHolder.SelectedVersion.Rule.Name
    }
    
    // 'value' attribute on BooleanRadioInput (id=AvailableToRun_Input) at RuleManagementAuditPopup.pcf: line 53, column 73
    function value_14 () : java.lang.Boolean {
      return historyHolder.SelectedVersion.Rule.AvailableToRun
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function value_2 () : RuleVersion {
      return historyHolder.SelectedVersion
    }
    
    // 'value' attribute on RowIterator at RuleManagementAuditPopup.pcf: line 76, column 82
    function value_41 () : gw.bizrules.pcf.RuleManagementAuditController.Activity[] {
      return controller.getVersionActivities(historyHolder.SelectedVersion).toTypedArray()
    }
    
    // 'value' attribute on CellIterator (id=ActivityGroupHeader) at RuleManagementAuditPopup.pcf: line 137, column 88
    function value_46 () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType[] {
      return activityTypes
    }
    
    // 'value' attribute on RowIterator (id=Rows) at RuleManagementAuditPopup.pcf: line 189, column 88
    function value_66 () : gw.bizrules.pcf.RuleManagementAuditController.AggregateEntry[] {
      return controller.getAggregateActivities(historyHolder.AllVersions).toTypedArray()
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function verifyValueRangeIsAllowedType_7 ($$arg :  RuleVersion[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleManagementAuditPopup.pcf: line 34, column 35
    function verifyValueRange_8 () : void {
      var __valueRangeArg = historyHolder.AllVersions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelSet (id=VersionViewPanelSet) at RuleManagementAuditPopup.pcf: line 40, column 57
    function visible_42 () : java.lang.Boolean {
      return historyHolder.SelectedVersion != null
    }
    
    // 'visible' attribute on PanelRef at RuleManagementAuditPopup.pcf: line 121, column 57
    function visible_67 () : java.lang.Boolean {
      return historyHolder.SelectedVersion == null
    }
    
    override property get CurrentLocation () : pcf.RuleManagementAuditPopup {
      return super.CurrentLocation as pcf.RuleManagementAuditPopup
    }
    
    property get activityTypes () : gw.bizrules.pcf.RuleManagementAuditController.ActivityType[] {
      return getVariableValue("activityTypes", 0) as gw.bizrules.pcf.RuleManagementAuditController.ActivityType[]
    }
    
    property set activityTypes ($arg :  gw.bizrules.pcf.RuleManagementAuditController.ActivityType[]) {
      setVariableValue("activityTypes", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleManagementAuditController {
      return getVariableValue("controller", 0) as gw.bizrules.pcf.RuleManagementAuditController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleManagementAuditController) {
      setVariableValue("controller", 0, $arg)
    }
    
    property get historyHolder () : gw.bizrules.pcf.RuleHistoryHolder {
      return getVariableValue("historyHolder", 0) as gw.bizrules.pcf.RuleHistoryHolder
    }
    
    property set historyHolder ($arg :  gw.bizrules.pcf.RuleHistoryHolder) {
      setVariableValue("historyHolder", 0, $arg)
    }
    
    property get initialVersion () : RuleVersion {
      return getVariableValue("initialVersion", 0) as RuleVersion
    }
    
    property set initialVersion ($arg :  RuleVersion) {
      setVariableValue("initialVersion", 0, $arg)
    }
    
    
  }
  
  
}