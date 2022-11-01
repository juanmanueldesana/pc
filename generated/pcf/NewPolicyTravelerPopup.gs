package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/NewPolicyTravelerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewPolicyTravelerPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (line :  TRVLine, contactType :  ContactType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewPolicyTravelerPopup, {line, contactType}, 0)
  }
  
  function pickValueAndCommit (value :  PolicyTraveler) : void {
    __widgetOf(this, pcf.NewPolicyTravelerPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (line :  TRVLine, contactType :  ContactType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewPolicyTravelerPopup, {line, contactType}, 0).push()
  }
  
  
}