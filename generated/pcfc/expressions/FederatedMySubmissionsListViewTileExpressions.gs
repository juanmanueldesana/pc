package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMySubmissionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMySubmissionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMySubmissionsListViewTile) at FederatedMySubmissionsListViewTile.pcf: line 11, column 56
    function action_37 () : void {
      DesktopSubmissions.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=FederatedMySubmissionsListViewTile) at FederatedMySubmissionsListViewTile.pcf: line 11, column 56
    function action_dest_38 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'sortBy' attribute on IteratorSort at FederatedMySubmissionsListViewTile.pcf: line 23, column 24
    function sortBy_0 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 30, column 25
    function sortValue_1 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 36, column 50
    function sortValue_2 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMySubmissionsListViewTile.pcf: line 42, column 25
    function sortValue_3 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMySubmissionsListViewTile.pcf: line 48, column 25
    function sortValue_4 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return typekey.PolicyPeriodStatus.get(submission.Status)
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at FederatedMySubmissionsListViewTile.pcf: line 53, column 25
    function sortValue_5 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.DateQuoteNeeded
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedMySubmissionsListViewTile.pcf: line 65, column 45
    function sortValue_6 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.PolicyProductCode
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMySubmissionsListViewTile.pcf: line 71, column 41
    function sortValue_7 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.Producer
    }
    
    // 'value' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function value_34 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.submission.SubmissionFederatedData()
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_35 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_35 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueTypeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at FederatedMySubmissionsListViewTile.pcf: line 20, column 76
    function verifyValueType_36 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_35(__valueTypeArg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedMySubmissionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 36, column 50
    function action_13 () : void {
      FederatedContactForward.go(submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 30, column 25
    function action_8 () : void {
      FederatedJobForward.go(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 36, column 50
    function action_dest_14 () : pcf.api.Destination {
      return pcf.FederatedContactForward.createDestination(submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 30, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 30, column 25
    function valueRoot_11 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at FederatedMySubmissionsListViewTile.pcf: line 30, column 25
    function value_10 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at FederatedMySubmissionsListViewTile.pcf: line 36, column 50
    function value_15 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at FederatedMySubmissionsListViewTile.pcf: line 42, column 25
    function value_18 () : java.util.Date {
      return submission.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FederatedMySubmissionsListViewTile.pcf: line 48, column 25
    function value_21 () : typekey.PolicyPeriodStatus {
      return typekey.PolicyPeriodStatus.get(submission.Status)
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at FederatedMySubmissionsListViewTile.pcf: line 53, column 25
    function value_23 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at FederatedMySubmissionsListViewTile.pcf: line 59, column 25
    function value_26 () : gw.pl.currency.MonetaryAmount {
      return submission.TotalPremiumRPT?.to()
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedMySubmissionsListViewTile.pcf: line 65, column 45
    function value_28 () : java.lang.String {
      return submission.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at FederatedMySubmissionsListViewTile.pcf: line 71, column 41
    function value_31 () : java.lang.String {
      return submission.Producer
    }
    
    property get submission () : gw.api.web.desktop.data.submission.SubmissionDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.submission.SubmissionDTO
    }
    
    
  }
  
  
}