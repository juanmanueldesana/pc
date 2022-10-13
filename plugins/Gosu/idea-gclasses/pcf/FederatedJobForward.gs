package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedJobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FederatedJobForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0)
  }
  
  static function drilldown (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).goInWorkspace()
  }
  
  static function printPage (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).printPage()
  }
  
  static function push (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FederatedJobForward, {jobNumber, accountPublicId}, 0).push()
  }
  
  
}