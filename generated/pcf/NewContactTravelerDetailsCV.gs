package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/NewContactTravelerDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewContactTravelerDetailsCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyContactRole :  PolicyContactRole, $openForEditOverride :  boolean) : void {
    __widgetOf(this, pcf.NewContactTravelerDetailsCV, SECTION_WIDGET_CLASS).setVariables(false, {$policyContactRole, $openForEditOverride})
  }
  
  function refreshVariables ($policyContactRole :  PolicyContactRole, $openForEditOverride :  boolean) : void {
    __widgetOf(this, pcf.NewContactTravelerDetailsCV, SECTION_WIDGET_CLASS).setVariables(true, {$policyContactRole, $openForEditOverride})
  }
  
  
}