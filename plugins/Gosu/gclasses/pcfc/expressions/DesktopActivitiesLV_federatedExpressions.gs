package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopActivitiesLV.federated.pcf: line 33, column 88
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.activity.ActivityDataFilters.allFilters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.federated.pcf: line 57, column 39
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopActivitiesLV.federated.pcf: line 19, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.activity.ActivityFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopActivitiesLV.federated.pcf: line 37, column 24
    function sortBy_2 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopActivitiesLV.federated.pcf: line 41, column 24
    function sortBy_3 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopActivitiesLV.federated.pcf: line 102, column 25
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at DesktopActivitiesLV.federated.pcf: line 108, column 25
    function sortValue_11 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.federated.pcf: line 57, column 39
    function sortValue_5 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function sortValue_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function sortValue_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return typekey.Priority.get(activity.Priority)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopActivitiesLV.federated.pcf: line 76, column 25
    function sortValue_8 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return typekey.ActivityStatus.get(activity.Status)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.federated.pcf: line 84, column 24
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on RowIterator at DesktopActivitiesLV.federated.pcf: line 27, column 76
    function value_55 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataActivities
    }
    
    // 'valueType' attribute on RowIterator at DesktopActivitiesLV.federated.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopActivitiesLV.federated.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopActivitiesLV.federated.pcf: line 27, column 76
    function verifyValueTypeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopActivitiesLV.federated.pcf: line 27, column 76
    function verifyValueType_57 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_56(__valueTypeArg)
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("activities", 0, $arg)
    }
    
    property get federatedDataActivities () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedDataActivities", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedDataActivities ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedDataActivities", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.federated.pcf: line 84, column 24
    function action_33 () : void {
      FederatedActivityForward.go(activity.PublicId, activity.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.federated.pcf: line 84, column 24
    function action_dest_34 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.federated.pcf: line 84, column 24
    function available_32 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function fontColor_19 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function fontColor_25 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.federated.pcf: line 57, column 39
    function iconColor_17 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at DesktopActivitiesLV.federated.pcf: line 43, column 55
    function useArchivedStyle_54 () : java.lang.Boolean {
      return activity.IsArchived
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopActivitiesLV.federated.pcf: line 50, column 52
    function valueRoot_13 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at DesktopActivitiesLV.federated.pcf: line 50, column 52
    function value_12 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.federated.pcf: line 57, column 39
    function value_15 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function value_20 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function value_26 () : typekey.Priority {
      return typekey.Priority.get(activity.Priority)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopActivitiesLV.federated.pcf: line 76, column 25
    function value_30 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.Status)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.federated.pcf: line 84, column 24
    function value_35 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at DesktopActivitiesLV.federated.pcf: line 90, column 25
    function value_39 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.federated.pcf: line 96, column 25
    function value_42 () : java.lang.String {
      return activity.UIDisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopActivitiesLV.federated.pcf: line 102, column 25
    function value_45 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=AssignedBy_Cell) at DesktopActivitiesLV.federated.pcf: line 108, column 25
    function value_48 () : java.lang.String {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopActivitiesLV.federated.pcf: line 115, column 25
    function value_51 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function verifyFontColorIsAllowedType_27 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function verifyFontColorIsAllowedType_27 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.federated.pcf: line 63, column 25
    function verifyFontColor_23 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_22(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.federated.pcf: line 70, column 25
    function verifyFontColor_28 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_27(__fontColorArg)
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}