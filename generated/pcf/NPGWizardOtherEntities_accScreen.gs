package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardOtherEntities_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardOtherEntities_accScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($entities :  java.util.Set<gw.acc.npg.wizard.OtherEntityStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardOtherEntities_accScreen, SECTION_WIDGET_CLASS).setVariables(false, {$entities})
  }
  
  function refreshVariables ($entities :  java.util.Set<gw.acc.npg.wizard.OtherEntityStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardOtherEntities_accScreen, SECTION_WIDGET_CLASS).setVariables(true, {$entities})
  }
  
  
}