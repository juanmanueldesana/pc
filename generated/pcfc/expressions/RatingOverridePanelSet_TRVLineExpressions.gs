package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingOverridePanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePanelSet_TRVLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingOverridePanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.TRVLine.pcf: line 68, column 122
    function def_onEnter_11 (def :  pcf.TRVRatingOverrideCostLV) : void {
      def.onEnter(costsByCbl.get(cbl), quoteDisplayUtil, isEditable, jobEffDate, prefCurrency)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.TRVLine.pcf: line 68, column 122
    function def_refreshVariables_12 (def :  pcf.TRVRatingOverrideCostLV) : void {
      def.refreshVariables(costsByCbl.get(cbl), quoteDisplayUtil, isEditable, jobEffDate, prefCurrency)
    }
    
    // 'label' attribute on Label at RatingOverridePanelSet.TRVLine.pcf: line 62, column 67
    function label_10 () : java.lang.String {
      return quoteDisplayUtil.CoverableDisplayName(cbl)
    }
    
    property get cbl () : Coverable {
      return getIteratedValue(2) as Coverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingOverridePanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingOverridePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingOverridePanelSet.TRVLine.pcf: line 58, column 26
    function sortBy_9 (cbl :  Coverable) : java.lang.Object {
      return cbl.FixedId
    }
    
    // 'value' attribute on PanelIterator (id=cblIterator) at RatingOverridePanelSet.TRVLine.pcf: line 55, column 33
    function value_13 () : Coverable[] {
      return cblByType.get(cblType).toTypedArray()
    }
    
    property get cblType () : java.lang.Object {
      return getIteratedValue(1) as java.lang.Object
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingOverridePanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.TRVLine.pcf: line 86, column 113
    function def_onEnter_18 (def :  pcf.TRVRatingOverrideCostLV) : void {
      def.onEnter(lineLevelCosts, quoteDisplayUtil, isEditable, jobEffDate, prefCurrency)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.TRVLine.pcf: line 86, column 113
    function def_refreshVariables_19 (def :  pcf.TRVRatingOverrideCostLV) : void {
      def.refreshVariables(lineLevelCosts, quoteDisplayUtil, isEditable, jobEffDate, prefCurrency)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 14, column 23
    function initialValue_0 () : TRVLine {
      return period.TRVLine
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 18, column 57
    function initialValue_1 () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return new gw.lob.trv.financials.TRVQuoteDisplayUtil(line, true)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 22, column 71
    function initialValue_2 () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return quoteDisplayUtil.getCoverablesWithCostsByType()
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 26, column 57
    function initialValue_3 () : Map<Coverable, List<TRVCost>> {
      return quoteDisplayUtil.getCostsByCoverable()
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 30, column 35
    function initialValue_4 () : List<TRVCost> {
      return costsByCbl.get(line)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 34, column 23
    function initialValue_5 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 38, column 20
    function initialValue_6 () : Date {
      return period.EditEffectiveDate
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.TRVLine.pcf: line 42, column 24
    function initialValue_7 () : Currency {
      return period.PreferredSettlementCurrency
    }
    
    // 'sortBy' attribute on IteratorSort at RatingOverridePanelSet.TRVLine.pcf: line 50, column 24
    function sortBy_8 (cblType :  java.lang.Object) : java.lang.Object {
      return cblType.toString()
    }
    
    // 'value' attribute on PanelIterator (id=cblTypeIterator) at RatingOverridePanelSet.TRVLine.pcf: line 47, column 53
    function value_14 () : List<gw.lang.reflect.IType> {
      return cblByType.Keys.where( \ t -> t != productmodel.TRVLine)
    }
    
    // 'valueType' attribute on PanelIterator (id=cblTypeIterator) at RatingOverridePanelSet.TRVLine.pcf: line 47, column 53
    function verifyValueTypeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on PanelIterator (id=cblTypeIterator) at RatingOverridePanelSet.TRVLine.pcf: line 47, column 53
    function verifyValueTypeIsAllowedType_15 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on PanelIterator (id=cblTypeIterator) at RatingOverridePanelSet.TRVLine.pcf: line 47, column 53
    function verifyValueTypeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on PanelIterator (id=cblTypeIterator) at RatingOverridePanelSet.TRVLine.pcf: line 47, column 53
    function verifyValueType_16 () : void {
      var __valueTypeArg : List<gw.lang.reflect.IType>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_15(__valueTypeArg)
    }
    
    // 'visible' attribute on DetailViewPanel at RatingOverridePanelSet.TRVLine.pcf: line 76, column 43
    function visible_17 () : java.lang.Boolean {
      return lineLevelCosts.Count>0
    }
    
    property get cblByType () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return getVariableValue("cblByType", 0) as Map<gw.lang.reflect.IType, List<Coverable>>
    }
    
    property set cblByType ($arg :  Map<gw.lang.reflect.IType, List<Coverable>>) {
      setVariableValue("cblByType", 0, $arg)
    }
    
    property get costsByCbl () : Map<Coverable, List<TRVCost>> {
      return getVariableValue("costsByCbl", 0) as Map<Coverable, List<TRVCost>>
    }
    
    property set costsByCbl ($arg :  Map<Coverable, List<TRVCost>>) {
      setVariableValue("costsByCbl", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
    }
    
    property get jobEffDate () : Date {
      return getVariableValue("jobEffDate", 0) as Date
    }
    
    property set jobEffDate ($arg :  Date) {
      setVariableValue("jobEffDate", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getVariableValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get lineLevelCosts () : List<TRVCost> {
      return getVariableValue("lineLevelCosts", 0) as List<TRVCost>
    }
    
    property set lineLevelCosts ($arg :  List<TRVCost>) {
      setVariableValue("lineLevelCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get prefCurrency () : Currency {
      return getVariableValue("prefCurrency", 0) as Currency
    }
    
    property set prefCurrency ($arg :  Currency) {
      setVariableValue("prefCurrency", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.trv.financials.TRVQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.trv.financials.TRVQuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  
}