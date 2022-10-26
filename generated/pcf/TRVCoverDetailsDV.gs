package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TRVCoverDetailsDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($item :  TRVCover, $policyPeriod :  PolicyPeriod, $line :  TRVLine, $openForEdit :  Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.TRVCoverDetailsDV, SECTION_WIDGET_CLASS).setVariables(false, {$item, $policyPeriod, $line, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($item :  TRVCover, $policyPeriod :  PolicyPeriod, $line :  TRVLine, $openForEdit :  Boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.TRVCoverDetailsDV, SECTION_WIDGET_CLASS).setVariables(true, {$item, $policyPeriod, $line, $openForEdit, $jobWizardHelper})
  }
  
  
}