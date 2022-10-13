package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFields_accPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardFields_accPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFields_accPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NPGWizardFields_accPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=EditCell_Cell) at NPGWizardFields_accPopup.pcf: line 71, column 102
    function action_6 () : void {
      wizardFieldDTO = fieldRow
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at NPGWizardFields_accPopup.pcf: line 75, column 44
    function valueRoot_8 () : java.lang.Object {
      return fieldRow
    }
    
    // 'value' attribute on TextCell (id=Field_Cell) at NPGWizardFields_accPopup.pcf: line 79, column 61
    function value_10 () : java.lang.String {
      return fieldRow.ColumnType.toString()
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at NPGWizardFields_accPopup.pcf: line 75, column 44
    function value_7 () : java.lang.String {
      return fieldRow.Name
    }
    
    property get fieldRow () : gw.acc.npg.wizard.WizardFieldDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.WizardFieldDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardFields_accPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardFields_accPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : int {
      return 0
    }
    
    static function __constructorIndex (wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>, typeIsCost :  boolean) : int {
      return 1
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NPGWizardFields_accPopup.pcf: line 95, column 47
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Desc_Input) at NPGWizardFields_accPopup.pcf: line 102, column 47
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Desc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.ColumnType = (__VALUE_TO_SET as gw.acc.npg.model.ColumnType)
    }
    
    // 'value' attribute on CheckBoxInput (id=Nullok_Input) at NPGWizardFields_accPopup.pcf: line 119, column 115
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Nullok = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Arrayentity_Input) at NPGWizardFields_accPopup.pcf: line 127, column 115
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Arrayentity = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=Owner_Input) at NPGWizardFields_accPopup.pcf: line 133, column 115
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Owner = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=CascadeDelete_Input) at NPGWizardFields_accPopup.pcf: line 139, column 115
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.CascadeDelete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Fkentity_Input) at NPGWizardFields_accPopup.pcf: line 147, column 120
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Fkentity = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Typelist_Input) at NPGWizardFields_accPopup.pcf: line 154, column 117
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Typelist = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Size_Input) at NPGWizardFields_accPopup.pcf: line 162, column 117
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Size = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Scale_Input) at NPGWizardFields_accPopup.pcf: line 170, column 184
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Scale = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Precision_Input) at NPGWizardFields_accPopup.pcf: line 178, column 116
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.Precision = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxInput (id=CostKeyField_Input) at NPGWizardFields_accPopup.pcf: line 184, column 62
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardFieldDTO.CostKeyField = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at NPGWizardFields_accPopup.pcf: line 27, column 50
    function initialValue_0 () : gw.acc.npg.wizard.WizardFieldDTO[] {
      return wizardFieldDTOs.toTypedArray()
    }
    
    // EditButtons at NPGWizardFields_accPopup.pcf: line 37, column 40
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'parent' attribute on Popup (id=NPGWizardFields_accPopup) at NPGWizardFields_accPopup.pcf: line 13, column 36
    static function parent_98 (typeIsCost :  boolean, wizardFieldDTOs :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : pcf.api.Destination {
      return pcf.NPG_accWizard.createDestination()
    }
    
    // 'pickValue' attribute on EditButtons at NPGWizardFields_accPopup.pcf: line 37, column 40
    function pickValue_1 () : java.util.Set<gw.acc.npg.wizard.WizardFieldDTO> {
      return wizardFieldDTOs
    }
    
    // 'regex' attribute on TextInput (id=Name_Input) at NPGWizardFields_accPopup.pcf: line 95, column 47
    function regex_18 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.FIELD_NAME.Pattern.pattern()
    }
    
    // 'regex' attribute on TextInput (id=Arrayentity_Input) at NPGWizardFields_accPopup.pcf: line 127, column 115
    function regex_46 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.ENTITY_NAME.Pattern.pattern()
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at NPGWizardFields_accPopup.pcf: line 75, column 44
    function sortValue_4 (fieldRow :  gw.acc.npg.wizard.WizardFieldDTO) : java.lang.Object {
      return fieldRow.Name
    }
    
    // 'value' attribute on TextCell (id=Field_Cell) at NPGWizardFields_accPopup.pcf: line 79, column 61
    function sortValue_5 (fieldRow :  gw.acc.npg.wizard.WizardFieldDTO) : java.lang.Object {
      return fieldRow.ColumnType.toString()
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddFieldBtn) at NPGWizardFields_accPopup.pcf: line 50, column 116
    function toCreateAndAdd_3 (CheckedValues :  Object[]) : java.lang.Object {
      var x = new gw.acc.npg.wizard.WizardFieldDTO(); wizardFieldDTOs.add(x); return x
    }
    
    // 'toRemove' attribute on RowIterator (id=FieldRowIterator) at NPGWizardFields_accPopup.pcf: line 65, column 64
    function toRemove_12 (fieldRow :  gw.acc.npg.wizard.WizardFieldDTO) : void {
      wizardFieldDTOs.remove(fieldRow); wizardFieldData = wizardFieldDTOs.toTypedArray(); wizardFieldDTO = null;
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function valueRange_31 () : java.lang.Object {
      return gw.acc.npg.wizard.WizardFieldDTO.COLUMN_TYPES
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NPGWizardFields_accPopup.pcf: line 95, column 47
    function valueRoot_17 () : java.lang.Object {
      return wizardFieldDTO
    }
    
    // 'value' attribute on RowIterator (id=FieldRowIterator) at NPGWizardFields_accPopup.pcf: line 65, column 64
    function value_13 () : gw.acc.npg.wizard.WizardFieldDTO[] {
      return wizardFieldData
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NPGWizardFields_accPopup.pcf: line 95, column 47
    function value_15 () : java.lang.String {
      return wizardFieldDTO.Name
    }
    
    // 'value' attribute on TextInput (id=Desc_Input) at NPGWizardFields_accPopup.pcf: line 102, column 47
    function value_22 () : java.lang.String {
      return wizardFieldDTO.Desc
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function value_28 () : gw.acc.npg.model.ColumnType {
      return wizardFieldDTO.ColumnType
    }
    
    // 'value' attribute on CheckBoxInput (id=Nullok_Input) at NPGWizardFields_accPopup.pcf: line 119, column 115
    function value_37 () : java.lang.Boolean {
      return wizardFieldDTO.Nullok
    }
    
    // 'value' attribute on TextInput (id=Arrayentity_Input) at NPGWizardFields_accPopup.pcf: line 127, column 115
    function value_43 () : java.lang.String {
      return wizardFieldDTO.Arrayentity
    }
    
    // 'value' attribute on CheckBoxInput (id=Owner_Input) at NPGWizardFields_accPopup.pcf: line 133, column 115
    function value_50 () : java.lang.Boolean {
      return wizardFieldDTO.Owner
    }
    
    // 'value' attribute on CheckBoxInput (id=CascadeDelete_Input) at NPGWizardFields_accPopup.pcf: line 139, column 115
    function value_56 () : java.lang.Boolean {
      return wizardFieldDTO.CascadeDelete
    }
    
    // 'value' attribute on TextInput (id=Fkentity_Input) at NPGWizardFields_accPopup.pcf: line 147, column 120
    function value_62 () : java.lang.String {
      return wizardFieldDTO.Fkentity
    }
    
    // 'value' attribute on TextInput (id=Typelist_Input) at NPGWizardFields_accPopup.pcf: line 154, column 117
    function value_69 () : java.lang.String {
      return wizardFieldDTO.Typelist
    }
    
    // 'value' attribute on TextInput (id=Size_Input) at NPGWizardFields_accPopup.pcf: line 162, column 117
    function value_75 () : java.lang.Integer {
      return wizardFieldDTO.Size
    }
    
    // 'value' attribute on TextInput (id=Scale_Input) at NPGWizardFields_accPopup.pcf: line 170, column 184
    function value_81 () : java.lang.Integer {
      return wizardFieldDTO.Scale
    }
    
    // 'value' attribute on TextInput (id=Precision_Input) at NPGWizardFields_accPopup.pcf: line 178, column 116
    function value_87 () : java.lang.Integer {
      return wizardFieldDTO.Precision
    }
    
    // 'value' attribute on CheckBoxInput (id=CostKeyField_Input) at NPGWizardFields_accPopup.pcf: line 184, column 62
    function value_93 () : java.lang.Boolean {
      return wizardFieldDTO.CostKeyField
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.acc.npg.model.ColumnType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at NPGWizardFields_accPopup.pcf: line 111, column 46
    function verifyValueRange_33 () : void {
      var __valueRangeArg = gw.acc.npg.wizard.WizardFieldDTO.COLUMN_TYPES
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at NPGWizardFields_accPopup.pcf: line 95, column 47
    function visible_14 () : java.lang.Boolean {
      return wizardFieldDTO != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=Nullok_Input) at NPGWizardFields_accPopup.pcf: line 119, column 115
    function visible_36 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType != gw.acc.npg.model.ColumnType.Array 
    }
    
    // 'visible' attribute on TextInput (id=Arrayentity_Input) at NPGWizardFields_accPopup.pcf: line 127, column 115
    function visible_42 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Array 
    }
    
    // 'visible' attribute on TextInput (id=Fkentity_Input) at NPGWizardFields_accPopup.pcf: line 147, column 120
    function visible_61 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Foreignkey 
    }
    
    // 'visible' attribute on TextInput (id=Typelist_Input) at NPGWizardFields_accPopup.pcf: line 154, column 117
    function visible_68 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Typekey 
    }
    
    // 'visible' attribute on TextInput (id=Size_Input) at NPGWizardFields_accPopup.pcf: line 162, column 117
    function visible_74 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Varchar 
    }
    
    // 'visible' attribute on TextInput (id=Scale_Input) at NPGWizardFields_accPopup.pcf: line 170, column 184
    function visible_80 () : java.lang.Boolean {
      return wizardFieldDTO != null and (wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Decimal or wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Money)
    }
    
    // 'visible' attribute on TextInput (id=Precision_Input) at NPGWizardFields_accPopup.pcf: line 178, column 116
    function visible_86 () : java.lang.Boolean {
      return wizardFieldDTO != null and wizardFieldDTO.ColumnType == gw.acc.npg.model.ColumnType.Decimal
    }
    
    // 'visible' attribute on CheckBoxInput (id=CostKeyField_Input) at NPGWizardFields_accPopup.pcf: line 184, column 62
    function visible_92 () : java.lang.Boolean {
      return wizardFieldDTO != null and typeIsCost
    }
    
    override property get CurrentLocation () : pcf.NPGWizardFields_accPopup {
      return super.CurrentLocation as pcf.NPGWizardFields_accPopup
    }
    
    property get typeIsCost () : boolean {
      return getVariableValue("typeIsCost", 0) as java.lang.Boolean
    }
    
    property set typeIsCost ($arg :  boolean) {
      setVariableValue("typeIsCost", 0, $arg)
    }
    
    property get wizardFieldDTO () : gw.acc.npg.wizard.WizardFieldDTO {
      return getVariableValue("wizardFieldDTO", 0) as gw.acc.npg.wizard.WizardFieldDTO
    }
    
    property set wizardFieldDTO ($arg :  gw.acc.npg.wizard.WizardFieldDTO) {
      setVariableValue("wizardFieldDTO", 0, $arg)
    }
    
    property get wizardFieldDTOs () : java.util.Set<gw.acc.npg.wizard.WizardFieldDTO> {
      return getVariableValue("wizardFieldDTOs", 0) as java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>
    }
    
    property set wizardFieldDTOs ($arg :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) {
      setVariableValue("wizardFieldDTOs", 0, $arg)
    }
    
    property get wizardFieldData () : gw.acc.npg.wizard.WizardFieldDTO[] {
      return getVariableValue("wizardFieldData", 0) as gw.acc.npg.wizard.WizardFieldDTO[]
    }
    
    property set wizardFieldData ($arg :  gw.acc.npg.wizard.WizardFieldDTO[]) {
      setVariableValue("wizardFieldData", 0, $arg)
    }
    
    
  }
  
  
}