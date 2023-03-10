package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policyfile/PolicyFile_Forms_TRV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PolicyFile_Forms_TRV extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0)
  }
  
  static function drilldown (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0).goInMain()
  }
  
  static function printPage (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0).printPage()
  }
  
  static function push (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyFile_Forms_TRV, {policyPeriod, asOfDate}, 0).push()
  }
  
  
}