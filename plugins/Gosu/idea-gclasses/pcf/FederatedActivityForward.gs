package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedActivityForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FederatedActivityForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0)
  }
  
  static function drilldown (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).goInWorkspace()
  }
  
  static function printPage (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).printPage()
  }
  
  static function push (activityPublicId :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedActivityForward, {activityPublicId, accountPublicId}, 0).push()
  }
  
  
}