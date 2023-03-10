package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/messaging/MessagingDestinationControlList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessagingDestinationControlListExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessagingDestinationControlList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessagingDestinationControlListExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=MessagingDestinationControlList_RestartMessagingEngineButton) at MessagingDestinationControlList.pcf: line 32, column 25
    function action_2 () : void {
      gw.api.admin.MessagingUtil.restartMessageEngine()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_SuspendButton) at MessagingDestinationControlList.pcf: line 18, column 25
    function allCheckedRowsAction_0 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.suspendDestinations(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_ResumeButton) at MessagingDestinationControlList.pcf: line 25, column 25
    function allCheckedRowsAction_1 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.resumeDestinations(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=MessagingDestinationControlList) at MessagingDestinationControlList.pcf: line 8, column 84
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.integadmin or perm.System.eventmessageview
    }
    
    // 'def' attribute on PanelRef at MessagingDestinationControlList.pcf: line 35, column 49
    function def_onEnter_3 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at MessagingDestinationControlList.pcf: line 35, column 49
    function def_refreshVariables_4 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.refreshVariables()
    }
    
    // Page (id=MessagingDestinationControlList) at MessagingDestinationControlList.pcf: line 8, column 84
    static function parent_6 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MessagingDestinationControlList {
      return super.CurrentLocation as pcf.MessagingDestinationControlList
    }
    
    
  }
  
  
}