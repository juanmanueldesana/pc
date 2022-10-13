package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedContactForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FederatedContactForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (accountPublicId :  java.lang.String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0)
  }
  
  static function drilldown (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).goInWorkspace()
  }
  
  static function printPage (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).printPage()
  }
  
  static function push (accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedContactForward, {accountPublicId}, 0).push()
  }
  
  
}