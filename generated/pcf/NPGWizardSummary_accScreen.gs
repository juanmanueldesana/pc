package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardSummary_accScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($wizardDataUtil :  gw.acc.npg.wizard.WizardProductLineCreator) : void {
    __widgetOf(this, pcf.NPGWizardSummary_accScreen, SECTION_WIDGET_CLASS).setVariables(false, {$wizardDataUtil})
  }
  
  function refreshVariables ($wizardDataUtil :  gw.acc.npg.wizard.WizardProductLineCreator) : void {
    __widgetOf(this, pcf.NPGWizardSummary_accScreen, SECTION_WIDGET_CLASS).setVariables(true, {$wizardDataUtil})
  }
  
  
}