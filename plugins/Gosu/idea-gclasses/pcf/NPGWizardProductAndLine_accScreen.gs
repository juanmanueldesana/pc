package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardProductAndLine_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardProductAndLine_accScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($wizardDTO :  gw.acc.npg.wizard.ProductInfoStepDTO) : void {
    __widgetOf(this, pcf.NPGWizardProductAndLine_accScreen, SECTION_WIDGET_CLASS).setVariables(false, {$wizardDTO})
  }
  
  function refreshVariables ($wizardDTO :  gw.acc.npg.wizard.ProductInfoStepDTO) : void {
    __widgetOf(this, pcf.NPGWizardProductAndLine_accScreen, SECTION_WIDGET_CLASS).setVariables(true, {$wizardDTO})
  }
  
  
}