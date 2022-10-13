package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFields_accPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardFields_accPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NPGWizardFields_accPopup, {wizardFieldDTOs}, 0)
  }
  
  static function createDestination (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>, typeIsCost :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NPGWizardFields_accPopup, {wizardFieldDTOs, typeIsCost}, 1)
  }
  
  function pickValueAndCommit (value :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : void {
    __widgetOf(this, pcf.NPGWizardFields_accPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NPGWizardFields_accPopup, {wizardFieldDTOs}, 0).push()
  }
  
  static function push (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>, typeIsCost :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NPGWizardFields_accPopup, {wizardFieldDTOs, typeIsCost}, 1).push()
  }
  
  
}