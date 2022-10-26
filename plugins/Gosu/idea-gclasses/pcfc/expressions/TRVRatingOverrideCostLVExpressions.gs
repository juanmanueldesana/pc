package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVRatingOverrideCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TRVRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 117, column 51
    function currency_55 () : typekey.Currency {
      return prefCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 103, column 45
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 110, column 45
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 117, column 51
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideTermAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 124, column 47
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at TRVRatingOverrideCostLV.pcf: line 130, column 31
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 103, column 45
    function editable_39 () : java.lang.Boolean {
      return cost.Overridable
    }
    
    // 'editable' attribute on Row at TRVRatingOverrideCostLV.pcf: line 61, column 100
    function editable_83 () : java.lang.Boolean {
      return !(quoteDisplayUtil.willRateThisSliceForward() and cost.EffDate < jobEffDate)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at TRVRatingOverrideCostLV.pcf: line 70, column 33
    function valueRoot_22 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TRVRatingOverrideCostLV.pcf: line 66, column 31
    function value_19 () : String {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at TRVRatingOverrideCostLV.pcf: line 70, column 33
    function value_21 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at TRVRatingOverrideCostLV.pcf: line 74, column 33
    function value_24 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 80, column 45
    function value_27 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 86, column 45
    function value_30 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at TRVRatingOverrideCostLV.pcf: line 91, column 42
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at TRVRatingOverrideCostLV.pcf: line 96, column 38
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 103, column 45
    function value_40 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 110, column 45
    function value_46 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 117, column 51
    function value_52 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 124, column 47
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at TRVRatingOverrideCostLV.pcf: line 130, column 31
    function value_66 () : String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 136, column 45
    function value_71 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 142, column 45
    function value_74 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 147, column 51
    function value_77 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 152, column 47
    function value_80 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmountBilling
    }
    
    property get cost () : TRVCost {
      return getIteratedValue(1) as TRVCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVRatingOverrideCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at TRVRatingOverrideCostLV.pcf: line 53, column 29
    function editable_18 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'sortBy' attribute on IteratorSort at TRVRatingOverrideCostLV.pcf: line 56, column 24
    function sortBy_0 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'sortBy' attribute on IteratorSort at TRVRatingOverrideCostLV.pcf: line 59, column 24
    function sortBy_1 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 110, column 45
    function sortValue_10 (cost :  TRVCost) : java.lang.Object {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 117, column 51
    function sortValue_11 (cost :  TRVCost) : java.lang.Object {
      return cost.OverrideTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 124, column 47
    function sortValue_12 (cost :  TRVCost) : java.lang.Object {
      return cost.OverrideAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at TRVRatingOverrideCostLV.pcf: line 130, column 31
    function sortValue_13 (cost :  TRVCost) : java.lang.Object {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 136, column 45
    function sortValue_14 (cost :  TRVCost) : java.lang.Object {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 142, column 45
    function sortValue_15 (cost :  TRVCost) : java.lang.Object {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 147, column 51
    function sortValue_16 (cost :  TRVCost) : java.lang.Object {
      return cost.StandardTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmountBilling_Cell) at TRVRatingOverrideCostLV.pcf: line 152, column 47
    function sortValue_17 (cost :  TRVCost) : java.lang.Object {
      return cost.StandardAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at TRVRatingOverrideCostLV.pcf: line 66, column 31
    function sortValue_2 (cost :  TRVCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at TRVRatingOverrideCostLV.pcf: line 70, column 33
    function sortValue_3 (cost :  TRVCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at TRVRatingOverrideCostLV.pcf: line 74, column 33
    function sortValue_4 (cost :  TRVCost) : java.lang.Object {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 80, column 45
    function sortValue_5 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at TRVRatingOverrideCostLV.pcf: line 86, column 45
    function sortValue_6 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at TRVRatingOverrideCostLV.pcf: line 91, column 42
    function sortValue_7 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at TRVRatingOverrideCostLV.pcf: line 96, column 38
    function sortValue_8 (cost :  TRVCost) : java.lang.Object {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at TRVRatingOverrideCostLV.pcf: line 103, column 45
    function sortValue_9 (cost :  TRVCost) : java.lang.Object {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on RowIterator at TRVRatingOverrideCostLV.pcf: line 53, column 29
    function value_84 () : TRVCost[] {
      return costs.toTypedArray()
    }
    
    // 'visible' attribute on ListViewPanel (id=TRVRatingOverrideCostLV) at TRVRatingOverrideCostLV.pcf: line 7, column 28
    function visible_85 () : java.lang.Boolean {
      return !costs.Empty
    }
    
    property get costs () : List<TRVCost> {
      return getRequireValue("costs", 0) as List<TRVCost>
    }
    
    property set costs ($arg :  List<TRVCost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobEffDate () : java.util.Date {
      return getRequireValue("jobEffDate", 0) as java.util.Date
    }
    
    property set jobEffDate ($arg :  java.util.Date) {
      setRequireValue("jobEffDate", 0, $arg)
    }
    
    property get prefCurrency () : Currency {
      return getRequireValue("prefCurrency", 0) as Currency
    }
    
    property set prefCurrency ($arg :  Currency) {
      setRequireValue("prefCurrency", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return getRequireValue("quoteDisplayUtil", 0) as gw.lob.trv.financials.TRVQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.trv.financials.TRVQuoteDisplayUtil) {
      setRequireValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}