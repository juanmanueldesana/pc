package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMyActivitiesListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMyActivitiesListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyActivitiesListViewTile) at FederatedMyActivitiesListViewTile.pcf: line 11, column 56
    function action_53 () : void {
      DesktopActivities.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMyActivitiesListViewTile) at FederatedMyActivitiesListViewTile.pcf: line 11, column 56
    function action_dest_54 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 35, column 32
    function iconColor_2 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyActivitiesListViewTile.pcf: line 20, column 24
    function sortBy_0 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMyActivitiesListViewTile.pcf: line 23, column 24
    function sortBy_1 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 43
    function sortValue_10 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.PolicyProductCode
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 35, column 32
    function sortValue_3 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function sortValue_4 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 24
    function sortValue_5 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function sortValue_6 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return typekey.Priority.get(activity.Priority)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyActivitiesListViewTile.pcf: line 62, column 25
    function sortValue_7 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return typekey.ActivityStatus.get(activity.Status)
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 68, column 50
    function sortValue_8 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.AccountHolderContact
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 73, column 25
    function sortValue_9 (activity :  gw.api.web.desktop.data.activity.ActivityDTO) : java.lang.Object {
      return activity.EscalationDate
    }
    
    // 'value' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function value_50 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.activity.ActivityFederatedData()
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueTypeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMyActivitiesListViewTile.pcf: line 17, column 76
    function verifyValueType_52 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_51(__valueTypeArg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMyActivitiesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedMyActivitiesListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 24
    function action_22 () : void {
      FederatedActivityForward.go(activity.PublicId, activity.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 68, column 50
    function action_35 () : void {
      FederatedContactForward.go(activity.AccountPublicId)
    }
    
    // 'action' attribute on ButtonCell (id=CompleteButton_Cell) at FederatedMyActivitiesListViewTile.pcf: line 84, column 99
    function action_47 () : void {
      var activityEntity = Activity.finder.findActivityByPublicId(activity.PublicId); gw.api.web.activity.ActivityUtil.completeActivity(activityEntity, null)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 24
    function action_dest_23 () : pcf.api.Destination {
      return pcf.FederatedActivityForward.createDestination(activity.PublicId, activity.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 68, column 50
    function action_dest_36 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(activity.AccountPublicId)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 24
    function available_21 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'available' attribute on ButtonCell (id=CompleteButton_Cell) at FederatedMyActivitiesListViewTile.pcf: line 84, column 99
    function available_46 () : java.lang.Boolean {
      return false //TODO activity.canComplete() and activityEntity.canRecur() == false
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function fontColor_15 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function fontColor_28 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 35, column 32
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'useArchivedStyle' attribute on Row at FederatedMyActivitiesListViewTile.pcf: line 25, column 55
    function useArchivedStyle_49 () : java.lang.Boolean {
      return activity.IsArchived
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 35, column 32
    function valueRoot_12 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=EscalatedIcon_Cell) at FederatedMyActivitiesListViewTile.pcf: line 35, column 32
    function value_11 () : boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function value_16 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FederatedMyActivitiesListViewTile.pcf: line 49, column 24
    function value_24 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function value_29 () : typekey.Priority {
      return typekey.Priority.get(activity.Priority)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMyActivitiesListViewTile.pcf: line 62, column 25
    function value_33 () : typekey.ActivityStatus {
      return typekey.ActivityStatus.get(activity.Status)
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at FederatedMyActivitiesListViewTile.pcf: line 68, column 50
    function value_37 () : java.lang.String {
      return activity.AccountHolderContact
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 73, column 25
    function value_40 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedMyActivitiesListViewTile.pcf: line 79, column 43
    function value_43 () : java.lang.String {
      return activity.PolicyProduct
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function verifyFontColorIsAllowedType_18 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function verifyFontColorIsAllowedType_18 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function verifyFontColorIsAllowedType_30 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function verifyFontColorIsAllowedType_30 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FederatedMyActivitiesListViewTile.pcf: line 41, column 25
    function verifyFontColor_19 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_18(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at FederatedMyActivitiesListViewTile.pcf: line 56, column 25
    function verifyFontColor_31 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_30(__fontColorArg)
    }
    
    property get activity () : gw.api.web.desktop.data.activity.ActivityDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.activity.ActivityDTO
    }
    
    
  }
  
  
}