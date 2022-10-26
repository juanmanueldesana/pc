package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TRVCoverPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $line :  TRVLine, $openForEdit :  Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.TRVCoverPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $line, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $line :  TRVLine, $openForEdit :  Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.TRVCoverPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $line, $openForEdit, $jobWizardHelper})
  }
  
  
}