package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCosts_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardCosts_accScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($costs :  java.util.Set<gw.acc.npg.wizard.CostStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardCosts_accScreen, SECTION_WIDGET_CLASS).setVariables(false, {$costs})
  }
  
  function refreshVariables ($costs :  java.util.Set<gw.acc.npg.wizard.CostStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardCosts_accScreen, SECTION_WIDGET_CLASS).setVariables(true, {$costs})
  }
  
  
}