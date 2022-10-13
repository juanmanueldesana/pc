package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCoverables_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NPGWizardCoverables_accScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverables :  java.util.Set<gw.acc.npg.wizard.CoverableStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardCoverables_accScreen, SECTION_WIDGET_CLASS).setVariables(false, {$coverables})
  }
  
  function refreshVariables ($coverables :  java.util.Set<gw.acc.npg.wizard.CoverableStepDTO>) : void {
    __widgetOf(this, pcf.NPGWizardCoverables_accScreen, SECTION_WIDGET_CLASS).setVariables(true, {$coverables})
  }
  
  
}