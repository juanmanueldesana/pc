package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TRVRatingOverrideCostLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($costs :  List<TRVCost>, $quoteDisplayUtil :  gw.lob.trv.financials.TRVQuoteDisplayUtil, $isEditable :  boolean, $jobEffDate :  java.util.Date, $prefCurrency :  Currency) : void {
    __widgetOf(this, pcf.TRVRatingOverrideCostLV, SECTION_WIDGET_CLASS).setVariables(false, {$costs, $quoteDisplayUtil, $isEditable, $jobEffDate, $prefCurrency})
  }
  
  function refreshVariables ($costs :  List<TRVCost>, $quoteDisplayUtil :  gw.lob.trv.financials.TRVQuoteDisplayUtil, $isEditable :  boolean, $jobEffDate :  java.util.Date, $prefCurrency :  Currency) : void {
    __widgetOf(this, pcf.TRVRatingOverrideCostLV, SECTION_WIDGET_CLASS).setVariables(true, {$costs, $quoteDisplayUtil, $isEditable, $jobEffDate, $prefCurrency})
  }
  
  
}