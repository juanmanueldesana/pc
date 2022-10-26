package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVLineStandardCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TRVLineStandardCoveragesDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($line :  TRVLine, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.TRVLineStandardCoveragesDV, SECTION_WIDGET_CLASS).setVariables(false, {$line, $openForEdit})
  }
  
  function refreshVariables ($line :  TRVLine, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.TRVLineStandardCoveragesDV, SECTION_WIDGET_CLASS).setVariables(true, {$line, $openForEdit})
  }
  
  
}