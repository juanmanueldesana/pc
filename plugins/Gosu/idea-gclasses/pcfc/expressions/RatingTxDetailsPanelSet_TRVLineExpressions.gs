package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_TRVLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 182, column 47
    function valueRoot_65 () : java.lang.Object {
      return trxn.Cost
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 196, column 35
    function valueRoot_74 () : java.lang.Object {
      return trxn
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 177, column 26
    function value_62 () : String {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 182, column 47
    function value_64 () : java.math.BigDecimal {
      return trxn.Cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 187, column 47
    function value_67 () : java.math.BigDecimal {
      return trxn.Cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 192, column 56
    function value_70 () : gw.pl.currency.MonetaryAmount {
      return trxn.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 196, column 35
    function value_73 () : java.util.Date {
      return trxn.EffDate
    }
    
    // 'value' attribute on DateCell (id=trxnExpDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 200, column 35
    function value_76 () : java.util.Date {
      return trxn.ExpDate
    }
    
    // 'value' attribute on TextCell (id=trxnProration_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 206, column 33
    function value_79 () : String {
      return gw.api.util.StringUtil.formatNumber(trxn.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=trxnAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 211, column 40
    function value_81 () : gw.pl.currency.MonetaryAmount {
      return trxn.AmountBilling
    }
    
    property get trxn () : TRVTransaction {
      return getIteratedValue(1) as TRVTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 102, column 51
    function valueRoot_25 () : java.lang.Object {
      return trxn.Cost
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 116, column 39
    function valueRoot_34 () : java.lang.Object {
      return trxn
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 97, column 37
    function value_22 () : String {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 102, column 51
    function value_24 () : java.math.BigDecimal {
      return trxn.Cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 107, column 51
    function value_27 () : java.math.BigDecimal {
      return trxn.Cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 112, column 60
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return trxn.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 116, column 39
    function value_33 () : java.util.Date {
      return trxn.EffDate
    }
    
    // 'value' attribute on DateCell (id=trxnExpDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 120, column 39
    function value_36 () : java.util.Date {
      return trxn.ExpDate
    }
    
    // 'value' attribute on TextCell (id=trxnProration_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 126, column 37
    function value_39 () : String {
      return gw.api.util.StringUtil.formatNumber(trxn.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=trxnAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 131, column 44
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return trxn.AmountBilling
    }
    
    property get trxn () : TRVTransaction {
      return getIteratedValue(3) as TRVTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 64, column 46
    function initialValue_7 () : List<TRVTransaction> {
      return trxnsByCbl.get(cbl)
    }
    
    // PanelIterator (id=cblIterator) at RatingTxDetailsPanelSet.TRVLine.pcf: line 59, column 33
    function initializeVariables_45 () : void {
        cblTrxns = trxnsByCbl.get(cbl);

    }
    
    // 'label' attribute on Label at RatingTxDetailsPanelSet.TRVLine.pcf: line 71, column 67
    function label_8 () : java.lang.String {
      return quoteDisplayUtil.CoverableDisplayName(cbl)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 87, column 30
    function sortBy_10 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 90, column 30
    function sortBy_11 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ID
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 84, column 30
    function sortBy_9 (trxn :  TRVTransaction) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 97, column 37
    function sortValue_12 (trxn :  TRVTransaction) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 102, column 51
    function sortValue_13 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 107, column 51
    function sortValue_14 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 112, column 60
    function sortValue_15 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 116, column 39
    function sortValue_16 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.EffDate
    }
    
    // 'value' attribute on DateCell (id=trxnExpDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 120, column 39
    function sortValue_17 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.ExpDate
    }
    
    // 'value' attribute on TextCell (id=trxnProration_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 126, column 37
    function sortValue_18 (trxn :  TRVTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(trxn.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=trxnAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 131, column 44
    function sortValue_19 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.AmountBilling
    }
    
    // 'value' attribute on TextCell (id=CblSubTotal_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 136, column 85
    function value_20 () : java.lang.String {
      return cblTrxns.AmountSum(thePeriod.PreferredSettlementCurrency).toString()
    }
    
    // 'value' attribute on RowIterator (id=cblRowIterator) at RatingTxDetailsPanelSet.TRVLine.pcf: line 81, column 42
    function value_44 () : TRVTransaction[] {
      return cblTrxns.toTypedArray()
    }
    
    property get cbl () : Coverable {
      return getIteratedValue(2) as Coverable
    }
    
    property get cblTrxns () : List<TRVTransaction> {
      return getVariableValue("cblTrxns", 2) as List<TRVTransaction>
    }
    
    property set cblTrxns ($arg :  List<TRVTransaction>) {
      setVariableValue("cblTrxns", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 67, column 26
    function sortBy_6 (cbl :  Coverable) : java.lang.Object {
      return cbl.FixedId
    }
    
    // 'value' attribute on PanelIterator (id=cblIterator) at RatingTxDetailsPanelSet.TRVLine.pcf: line 59, column 33
    function value_46 () : Coverable[] {
      return cblByType.get(cblType).toTypedArray()
    }
    
    property get cblType () : gw.lang.reflect.IType {
      return getIteratedValue(1) as gw.lang.reflect.IType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/RatingTxDetailsPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 26, column 23
    function initialValue_0 () : TRVLine {
      return thePeriod.TRVLine
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 31, column 57
    function initialValue_1 () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return new gw.lob.trv.financials.TRVQuoteDisplayUtil(line, false)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 36, column 71
    function initialValue_2 () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return quoteDisplayUtil.getCoverablesWithTrxnsByType()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 41, column 74
    function initialValue_3 () : java.util.Map<Coverable, List<TRVTransaction>> {
      return quoteDisplayUtil.getTrxnsByCoverable()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.TRVLine.pcf: line 46, column 42
    function initialValue_4 () : List<TRVTransaction> {
      return trxnsByCbl.get(line)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 162, column 26
    function sortBy_49 (trxn :  TRVTransaction) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 54, column 24
    function sortBy_5 (cblType :  gw.lang.reflect.IType) : java.lang.Object {
      return cblType.toString()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 165, column 26
    function sortBy_50 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.TRVLine.pcf: line 168, column 26
    function sortBy_51 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ID
    }
    
    // 'value' attribute on TextCell (id=descriptionCell_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 177, column 26
    function sortValue_52 (trxn :  TRVTransaction) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(trxn.TRVCost)
    }
    
    // 'value' attribute on TextCell (id=costAdjRate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 182, column 47
    function sortValue_53 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=costBasis_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 187, column 47
    function sortValue_54 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.Basis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costTermAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 192, column 56
    function sortValue_55 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=trxnEffDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 196, column 35
    function sortValue_56 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.EffDate
    }
    
    // 'value' attribute on DateCell (id=trxnExpDate_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 200, column 35
    function sortValue_57 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.ExpDate
    }
    
    // 'value' attribute on TextCell (id=trxnProration_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 206, column 33
    function sortValue_58 (trxn :  TRVTransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(trxn.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=trxnAmount_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 211, column 40
    function sortValue_59 (trxn :  TRVTransaction) : java.lang.Object {
      return trxn.AmountBilling
    }
    
    // 'value' attribute on PanelIterator (id=cblTypeIterator) at RatingTxDetailsPanelSet.TRVLine.pcf: line 51, column 43
    function value_47 () : gw.lang.reflect.IType[] {
      return cblByType.Keys.where( \ t -> t != productmodel.TRVLine).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=LineSubTotal_Cell) at RatingTxDetailsPanelSet.TRVLine.pcf: line 216, column 87
    function value_60 () : java.lang.String {
      return lineLevelTrxns.AmountSum(thePeriod.PreferredSettlementCurrency).toString()
    }
    
    // 'value' attribute on RowIterator (id=lineTrxnsIterator) at RatingTxDetailsPanelSet.TRVLine.pcf: line 159, column 38
    function value_84 () : TRVTransaction[] {
      return lineLevelTrxns.toTypedArray()
    }
    
    // 'visible' attribute on DetailViewPanel at RatingTxDetailsPanelSet.TRVLine.pcf: line 145, column 43
    function visible_48 () : java.lang.Boolean {
      return lineLevelTrxns.Count>0
    }
    
    property get cblByType () : Map<gw.lang.reflect.IType, List<Coverable>> {
      return getVariableValue("cblByType", 0) as Map<gw.lang.reflect.IType, List<Coverable>>
    }
    
    property set cblByType ($arg :  Map<gw.lang.reflect.IType, List<Coverable>>) {
      setVariableValue("cblByType", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getVariableValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get lineLevelTrxns () : List<TRVTransaction> {
      return getVariableValue("lineLevelTrxns", 0) as List<TRVTransaction>
    }
    
    property set lineLevelTrxns ($arg :  List<TRVTransaction>) {
      setVariableValue("lineLevelTrxns", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.trv.financials.TRVQuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.trv.financials.TRVQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.trv.financials.TRVQuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    property get revOpenForEdit () : boolean {
      return getRequireValue("revOpenForEdit", 0) as java.lang.Boolean
    }
    
    property set revOpenForEdit ($arg :  boolean) {
      setRequireValue("revOpenForEdit", 0, $arg)
    }
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    property get totalCostLabel () : String {
      return getRequireValue("totalCostLabel", 0) as String
    }
    
    property set totalCostLabel ($arg :  String) {
      setRequireValue("totalCostLabel", 0, $arg)
    }
    
    property get totalPremLabel () : String {
      return getRequireValue("totalPremLabel", 0) as String
    }
    
    property set totalPremLabel ($arg :  String) {
      setRequireValue("totalPremLabel", 0, $arg)
    }
    
    property get trxnsByCbl () : java.util.Map<Coverable, List<TRVTransaction>> {
      return getVariableValue("trxnsByCbl", 0) as java.util.Map<Coverable, List<TRVTransaction>>
    }
    
    property set trxnsByCbl ($arg :  java.util.Map<Coverable, List<TRVTransaction>>) {
      setVariableValue("trxnsByCbl", 0, $arg)
    }
    
    
  }
  
  
}