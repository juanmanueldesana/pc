package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingOverridePanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RatingOverridePanelSet_TRVLine extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($period :  PolicyPeriod) : void {
    __widgetOf(this, pcf.RatingOverridePanelSet_TRVLine, SECTION_WIDGET_CLASS).setVariables(false, {$period})
  }
  
  function refreshVariables ($period :  PolicyPeriod) : void {
    __widgetOf(this, pcf.RatingOverridePanelSet_TRVLine, SECTION_WIDGET_CLASS).setVariables(true, {$period})
  }
  
  
}