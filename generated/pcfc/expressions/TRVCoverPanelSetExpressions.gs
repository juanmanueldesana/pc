package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVCoverPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverableListDetailPanelExpressionsImpl extends TRVCoverPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 76, column 108
    function def_onEnter_12 (def :  pcf.TRVCoverDetailsDV) : void {
      def.onEnter(selectedItem, policyPeriod, line, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 85, column 47
    function def_onEnter_15 (def :  pcf.TRVCoverCoveragesDV) : void {
      def.onEnter(selectedItem, openForEdit)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 91, column 111
    function def_onEnter_17 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(selectedItem, new String[]{"TRVCoverAddGrp"}, true)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 76, column 108
    function def_refreshVariables_13 (def :  pcf.TRVCoverDetailsDV) : void {
      def.refreshVariables(selectedItem, policyPeriod, line, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 85, column 47
    function def_refreshVariables_16 (def :  pcf.TRVCoverCoveragesDV) : void {
      def.refreshVariables(selectedItem, openForEdit)
    }
    
    // 'def' attribute on PanelRef at TRVCoverPanelSet.pcf: line 91, column 111
    function def_refreshVariables_18 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(selectedItem, new String[]{"TRVCoverAddGrp"}, true)
    }
    
    // 'editable' attribute on RowIterator at TRVCoverPanelSet.pcf: line 45, column 43
    function editable_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'sortBy' attribute on TextCell (id=ItemID_Cell) at TRVCoverPanelSet.pcf: line 57, column 29
    function sortValue_0 (item :  TRVCover) : java.lang.Object {
      return item.FixedId
    }
    
    // 'value' attribute on TextCell (id=CreateUser_Cell) at TRVCoverPanelSet.pcf: line 64, column 30
    function sortValue_1 (item :  TRVCover) : java.lang.Object {
      return item.CreateUser.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at TRVCoverPanelSet.pcf: line 45, column 43
    function toCreateAndAdd_9 () : TRVCover {
      return line.createAndAddTRVCover()
    }
    
    // 'toRemove' attribute on RowIterator at TRVCoverPanelSet.pcf: line 45, column 43
    function toRemove_10 (item :  TRVCover) : void {
      line.removeTRVCover(item)
    }
    
    // 'value' attribute on RowIterator at TRVCoverPanelSet.pcf: line 45, column 43
    function value_11 () : entity.TRVCover[] {
      return line.TRVCovers
    }
    
    // 'visible' attribute on PanelRef at TRVCoverPanelSet.pcf: line 85, column 47
    function visible_14 () : java.lang.Boolean {
      return selectedItem != null
    }
    
    property get selectedItem () : TRVCover {
      return getCurrentSelection(1) as TRVCover
    }
    
    property set selectedItem ($arg :  TRVCover) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverableListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ItemID_Cell) at TRVCoverPanelSet.pcf: line 57, column 29
    function valueRoot_4 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextCell (id=CreateUser_Cell) at TRVCoverPanelSet.pcf: line 64, column 30
    function valueRoot_7 () : java.lang.Object {
      return item.CreateUser
    }
    
    // 'value' attribute on TextCell (id=ItemID_Cell) at TRVCoverPanelSet.pcf: line 57, column 29
    function value_3 () : gw.pl.persistence.core.Key {
      return item.FixedId
    }
    
    // 'value' attribute on TextCell (id=CreateUser_Cell) at TRVCoverPanelSet.pcf: line 64, column 30
    function value_6 () : String {
      return item.CreateUser.DisplayName
    }
    
    property get item () : TRVCover {
      return getIteratedValue(2) as TRVCover
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVCoverPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getRequireValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}