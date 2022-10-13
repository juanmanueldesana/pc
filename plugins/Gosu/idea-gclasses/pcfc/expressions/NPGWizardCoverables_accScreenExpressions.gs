package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCoverables_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardCoverables_accScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCoverables_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NPGWizardCoverables_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardCoverables_accScreen.pcf: line 113, column 35
    function action_50 () : void {
      NPGWizardFields_accPopup.push(coverable.Fields)
    }
    
    // 'action' attribute on PickerLink (id=FieldsManager) at NPGWizardCoverables_accScreen.pcf: line 113, column 35
    function action_dest_51 () : pcf.api.Destination {
      return pcf.NPGWizardFields_accPopup.createDestination(coverable.Fields)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCoverables_accScreen.pcf: line 49, column 45
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.EntityName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCoverables_accScreen.pcf: line 56, column 46
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 64, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.ReferenceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ReferredFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 72, column 47
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.ReferredFrom = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToLocation_Cell) at NPGWizardCoverables_accScreen.pcf: line 78, column 53
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.AttachedToLocation = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToBuilding_Cell) at NPGWizardCoverables_accScreen.pcf: line 84, column 53
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.AttachedToBuilding = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeConditions_Cell) at NPGWizardCoverables_accScreen.pcf: line 90, column 52
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.IncludeConditions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeExclusions_Cell) at NPGWizardCoverables_accScreen.pcf: line 96, column 52
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.IncludeExclusions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeModifiers_Cell) at NPGWizardCoverables_accScreen.pcf: line 102, column 51
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.IncludeModifiers = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PickerLink (id=FieldsManager) at NPGWizardCoverables_accScreen.pcf: line 113, column 35
    function label_52 () : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsButtonInLV", coverable.Fields.Count)
    }
    
    // 'onPick' attribute on PickerLink (id=FieldsManager) at NPGWizardCoverables_accScreen.pcf: line 113, column 35
    function onPick_53 (PickedValue :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : void {
      coverable.Fields = PickedValue
    }
    
    // 'regex' attribute on TextCell (id=EntityName_Cell) at NPGWizardCoverables_accScreen.pcf: line 49, column 45
    function regex_14 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.ENTITY_NAME.Pattern.pattern()
    }
    
    // 'regex' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 64, column 48
    function regex_23 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.FIELD_NAME.Pattern.pattern()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCoverables_accScreen.pcf: line 49, column 45
    function valueRoot_13 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCoverables_accScreen.pcf: line 49, column 45
    function value_11 () : java.lang.String {
      return coverable.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCoverables_accScreen.pcf: line 56, column 46
    function value_16 () : java.lang.String {
      return coverable.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 64, column 48
    function value_20 () : java.lang.String {
      return coverable.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=ReferredFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 72, column 47
    function value_25 () : java.lang.String {
      return coverable.ReferredFrom
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToLocation_Cell) at NPGWizardCoverables_accScreen.pcf: line 78, column 53
    function value_30 () : java.lang.Boolean {
      return coverable.AttachedToLocation
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToBuilding_Cell) at NPGWizardCoverables_accScreen.pcf: line 84, column 53
    function value_34 () : java.lang.Boolean {
      return coverable.AttachedToBuilding
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeConditions_Cell) at NPGWizardCoverables_accScreen.pcf: line 90, column 52
    function value_38 () : java.lang.Boolean {
      return coverable.IncludeConditions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeExclusions_Cell) at NPGWizardCoverables_accScreen.pcf: line 96, column 52
    function value_42 () : java.lang.Boolean {
      return coverable.IncludeExclusions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeModifiers_Cell) at NPGWizardCoverables_accScreen.pcf: line 102, column 51
    function value_46 () : java.lang.Boolean {
      return coverable.IncludeModifiers
    }
    
    property get coverable () : gw.acc.npg.wizard.CoverableStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.CoverableStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardCoverables_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardCoverables_accScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at NPGWizardCoverables_accScreen.pcf: line 10, column 52
    function initialValue_0 () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return coverables.toTypedArray()
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeModifiers_Cell) at NPGWizardCoverables_accScreen.pcf: line 102, column 51
    function sortValue_10 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeModifiers
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardCoverables_accScreen.pcf: line 49, column 45
    function sortValue_2 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardCoverables_accScreen.pcf: line 56, column 46
    function sortValue_3 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 64, column 48
    function sortValue_4 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=ReferredFrom_Cell) at NPGWizardCoverables_accScreen.pcf: line 72, column 47
    function sortValue_5 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.ReferredFrom
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToLocation_Cell) at NPGWizardCoverables_accScreen.pcf: line 78, column 53
    function sortValue_6 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.AttachedToLocation
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToBuilding_Cell) at NPGWizardCoverables_accScreen.pcf: line 84, column 53
    function sortValue_7 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.AttachedToBuilding
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeConditions_Cell) at NPGWizardCoverables_accScreen.pcf: line 90, column 52
    function sortValue_8 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeConditions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeExclusions_Cell) at NPGWizardCoverables_accScreen.pcf: line 96, column 52
    function sortValue_9 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeExclusions
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddBtn) at NPGWizardCoverables_accScreen.pcf: line 25, column 107
    function toCreateAndAdd_1 (CheckedValues :  Object[]) : java.lang.Object {
      var x = new gw.acc.npg.wizard.CoverableStepDTO(); coverables.add(x); return x
    }
    
    // 'toRemove' attribute on RowIterator (id=CoverableIterator) at NPGWizardCoverables_accScreen.pcf: line 40, column 60
    function toRemove_54 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : void {
      coverables.remove(coverable)
    }
    
    // 'value' attribute on RowIterator (id=CoverableIterator) at NPGWizardCoverables_accScreen.pcf: line 40, column 60
    function value_55 () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return coverablesArray
    }
    
    property get coverables () : java.util.Set<gw.acc.npg.wizard.CoverableStepDTO> {
      return getRequireValue("coverables", 0) as java.util.Set<gw.acc.npg.wizard.CoverableStepDTO>
    }
    
    property set coverables ($arg :  java.util.Set<gw.acc.npg.wizard.CoverableStepDTO>) {
      setRequireValue("coverables", 0, $arg)
    }
    
    property get coverablesArray () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return getVariableValue("coverablesArray", 0) as gw.acc.npg.wizard.CoverableStepDTO[]
    }
    
    property set coverablesArray ($arg :  gw.acc.npg.wizard.CoverableStepDTO[]) {
      setVariableValue("coverablesArray", 0, $arg)
    }
    
    
  }
  
  
}