package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TRVCoverCoveragesDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($item :  TRVCover, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.TRVCoverCoveragesDV, SECTION_WIDGET_CLASS).setVariables(false, {$item, $openForEdit})
  }
  
  function refreshVariables ($item :  TRVCover, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.TRVCoverCoveragesDV, SECTION_WIDGET_CLASS).setVariables(true, {$item, $openForEdit})
  }
  
  
}