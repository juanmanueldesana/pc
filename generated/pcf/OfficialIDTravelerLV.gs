package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/OfficialIDTravelerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OfficialIDTravelerLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($aTraveler :  Contact) : void {
    __widgetOf(this, pcf.OfficialIDTravelerLV, SECTION_WIDGET_CLASS).setVariables(false, {$aTraveler})
  }
  
  function refreshVariables ($aTraveler :  Contact) : void {
    __widgetOf(this, pcf.OfficialIDTravelerLV, SECTION_WIDGET_CLASS).setVariables(true, {$aTraveler})
  }
  
  
}