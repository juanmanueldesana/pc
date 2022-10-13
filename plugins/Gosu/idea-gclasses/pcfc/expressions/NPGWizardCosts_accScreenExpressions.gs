package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCosts_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardCosts_accScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCosts_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NPGWizardCosts_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardCosts_accScreen.pcf: line 99, column 35
    function action_37 () : void {
      NPGWizardFields_accPopup.push(cost.Fields, true)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardCosts_accScreen.pcf: line 99, column 35
    function action_dest_38 () : pcf.api.Destination {
      return pcf.NPGWizardFields_accPopup.createDestination(cost.Fields, true)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCosts_accScreen.pcf: line 56, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCosts_accScreen.pcf: line 64, column 43
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.ReferenceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at NPGWizardCosts_accScreen.pcf: line 72, column 43
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.CoverableName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at NPGWizardCosts_accScreen.pcf: line 80, column 42
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.CoverageName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ParentCost_Cell) at NPGWizardCosts_accScreen.pcf: line 88, column 40
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.ParentCost = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCosts_accScreen.pcf: line 49, column 40
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.EntityName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PickerLink (id=FieldsManager) at NPGWizardCosts_accScreen.pcf: line 99, column 35
    function label_39 () : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsButtonInLV", cost.Fields.Count)
    }
    
    // 'onPick' attribute on PickerLink (id=FieldsManager) at NPGWizardCosts_accScreen.pcf: line 99, column 35
    function onPick_40 (PickedValue :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : void {
      cost.Fields = PickedValue
    }
    
    // 'regex' attribute on TextCell (id=EntityName_Cell) at NPGWizardCosts_accScreen.pcf: line 49, column 40
    function regex_11 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.ENTITY_NAME.Pattern.pattern()
    }
    
    // 'regex' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCosts_accScreen.pcf: line 64, column 43
    function regex_20 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.FIELD_NAME.Pattern.pattern()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCosts_accScreen.pcf: line 49, column 40
    function valueRoot_10 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCosts_accScreen.pcf: line 56, column 41
    function value_13 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCosts_accScreen.pcf: line 64, column 43
    function value_17 () : java.lang.String {
      return cost.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at NPGWizardCosts_accScreen.pcf: line 72, column 43
    function value_22 () : java.lang.String {
      return cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at NPGWizardCosts_accScreen.pcf: line 80, column 42
    function value_27 () : java.lang.String {
      return cost.CoverageName
    }
    
    // 'value' attribute on TextCell (id=ParentCost_Cell) at NPGWizardCosts_accScreen.pcf: line 88, column 40
    function value_32 () : java.lang.String {
      return cost.ParentCost
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCosts_accScreen.pcf: line 49, column 40
    function value_8 () : java.lang.String {
      return cost.EntityName
    }
    
    property get cost () : gw.acc.npg.wizard.CostStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.CostStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCosts_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardCosts_accScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at NPGWizardCosts_accScreen.pcf: line 10, column 47
    function initialValue_0 () : gw.acc.npg.wizard.CostStepDTO[] {
      return costs.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCosts_accScreen.pcf: line 49, column 40
    function sortValue_2 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCosts_accScreen.pcf: line 56, column 41
    function sortValue_3 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCosts_accScreen.pcf: line 64, column 43
    function sortValue_4 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at NPGWizardCosts_accScreen.pcf: line 72, column 43
    function sortValue_5 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at NPGWizardCosts_accScreen.pcf: line 80, column 42
    function sortValue_6 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.CoverageName
    }
    
    // 'value' attribute on TextCell (id=ParentCost_Cell) at NPGWizardCosts_accScreen.pcf: line 88, column 40
    function sortValue_7 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.ParentCost
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddBtn) at NPGWizardCosts_accScreen.pcf: line 25, column 97
    function toCreateAndAdd_1 (CheckedValues :  Object[]) : java.lang.Object {
      var x = new gw.acc.npg.wizard.CostStepDTO(); costs.add(x); return x
    }
    
    // 'toRemove' attribute on RowIterator (id=CostIterator) at NPGWizardCosts_accScreen.pcf: line 40, column 55
    function toRemove_41 (cost :  gw.acc.npg.wizard.CostStepDTO) : void {
      costs.remove(cost)
    }
    
    // 'value' attribute on RowIterator (id=CostIterator) at NPGWizardCosts_accScreen.pcf: line 40, column 55
    function value_42 () : gw.acc.npg.wizard.CostStepDTO[] {
      return costsArray
    }
    
    property get costs () : java.util.Set<gw.acc.npg.wizard.CostStepDTO> {
      return getRequireValue("costs", 0) as java.util.Set<gw.acc.npg.wizard.CostStepDTO>
    }
    
    property set costs ($arg :  java.util.Set<gw.acc.npg.wizard.CostStepDTO>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get costsArray () : gw.acc.npg.wizard.CostStepDTO[] {
      return getVariableValue("costsArray", 0) as gw.acc.npg.wizard.CostStepDTO[]
    }
    
    property set costsArray ($arg :  gw.acc.npg.wizard.CostStepDTO[]) {
      setVariableValue("costsArray", 0, $arg)
    }
    
    
  }
  
  
}