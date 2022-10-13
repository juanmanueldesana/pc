package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardOtherEntities_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardOtherEntities_accScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardOtherEntities_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NPGWizardOtherEntities_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardOtherEntities_accScreen.pcf: line 67, column 35
    function action_13 () : void {
      NPGWizardFields_accPopup.push(entity.Fields)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardOtherEntities_accScreen.pcf: line 67, column 35
    function action_dest_14 () : pcf.api.Destination {
      return pcf.NPGWizardFields_accPopup.createDestination(entity.Fields)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 56, column 43
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      entity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 49, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      entity.EntityName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PickerLink (id=FieldsManager) at NPGWizardOtherEntities_accScreen.pcf: line 67, column 35
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsButtonInLV", entity.Fields.Count)
    }
    
    // 'onPick' attribute on PickerLink (id=FieldsManager) at NPGWizardOtherEntities_accScreen.pcf: line 67, column 35
    function onPick_16 (PickedValue :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : void {
      entity.Fields = PickedValue
    }
    
    // 'regex' attribute on TextCell (id=EntityName_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 49, column 42
    function regex_7 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.ENTITY_NAME.Pattern.pattern()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 49, column 42
    function valueRoot_6 () : java.lang.Object {
      return entity
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 49, column 42
    function value_4 () : java.lang.String {
      return entity.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 56, column 43
    function value_9 () : java.lang.String {
      return entity.Description
    }
    
    property get entity () : gw.acc.npg.wizard.OtherEntityStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.OtherEntityStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardOtherEntities_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardOtherEntities_accScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at NPGWizardOtherEntities_accScreen.pcf: line 10, column 54
    function initialValue_0 () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return entities.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 49, column 42
    function sortValue_2 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : java.lang.Object {
      return entity.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardOtherEntities_accScreen.pcf: line 56, column 43
    function sortValue_3 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : java.lang.Object {
      return entity.Description
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddBtn) at NPGWizardOtherEntities_accScreen.pcf: line 25, column 107
    function toCreateAndAdd_1 (CheckedValues :  Object[]) : java.lang.Object {
      var x = new gw.acc.npg.wizard.OtherEntityStepDTO(); entities.add(x); return x
    }
    
    // 'toRemove' attribute on RowIterator (id=EntityIterator) at NPGWizardOtherEntities_accScreen.pcf: line 40, column 62
    function toRemove_17 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : void {
      entities.remove(entity)
    }
    
    // 'value' attribute on RowIterator (id=EntityIterator) at NPGWizardOtherEntities_accScreen.pcf: line 40, column 62
    function value_18 () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return entitiesArray
    }
    
    property get entities () : java.util.Set<gw.acc.npg.wizard.OtherEntityStepDTO> {
      return getRequireValue("entities", 0) as java.util.Set<gw.acc.npg.wizard.OtherEntityStepDTO>
    }
    
    property set entities ($arg :  java.util.Set<gw.acc.npg.wizard.OtherEntityStepDTO>) {
      setRequireValue("entities", 0, $arg)
    }
    
    property get entitiesArray () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return getVariableValue("entitiesArray", 0) as gw.acc.npg.wizard.OtherEntityStepDTO[]
    }
    
    property set entitiesArray ($arg :  gw.acc.npg.wizard.OtherEntityStepDTO[]) {
      setVariableValue("entitiesArray", 0, $arg)
    }
    
    
  }
  
  
}