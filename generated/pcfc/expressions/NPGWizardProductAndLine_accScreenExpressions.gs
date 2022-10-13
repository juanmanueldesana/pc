package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardProductAndLine_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardProductAndLine_accScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardProductAndLine_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardProductAndLine_accScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerLink (id=ProductLineFieldsPicker) at NPGWizardProductAndLine_accScreen.pcf: line 98, column 29
    function action_45 () : void {
      NPGWizardFields_accPopup.push(wizardDTO.Fields)
    }
    
    // 'action' attribute on PickerLink (id=ProductLineFieldsPicker) at NPGWizardProductAndLine_accScreen.pcf: line 98, column 29
    function action_dest_46 () : pcf.api.Destination {
      return pcf.NPGWizardFields_accPopup.createDestination(wizardDTO.Fields)
    }
    
    // 'value' attribute on TextInput (id=PackageName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 25, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.PackageName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at NPGWizardProductAndLine_accScreen.pcf: line 48, column 50
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.ProductAbbreviation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EntitySuffix_Input) at NPGWizardProductAndLine_accScreen.pcf: line 56, column 50
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.ProductEntitySuffix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LineCode_Input) at NPGWizardProductAndLine_accScreen.pcf: line 67, column 39
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.LineCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LineEntityName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 75, column 45
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.LineEntityName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeConditions_Input) at NPGWizardProductAndLine_accScreen.pcf: line 80, column 52
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.LineIncludeConditions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeExclusions_Input) at NPGWizardProductAndLine_accScreen.pcf: line 85, column 52
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.LineIncludeExclusions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeModifiers_Input) at NPGWizardProductAndLine_accScreen.pcf: line 90, column 51
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.LineIncludeModifiers = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 32, column 49
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.ProductDisplayName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at NPGWizardProductAndLine_accScreen.pcf: line 40, column 42
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizardDTO.ProductCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PickerLink (id=ProductLineFieldsPicker) at NPGWizardProductAndLine_accScreen.pcf: line 98, column 29
    function label_47 () : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsButtonInLV", wizardDTO.Fields.Count)
    }
    
    // 'onPick' attribute on PickerLink (id=ProductLineFieldsPicker) at NPGWizardProductAndLine_accScreen.pcf: line 98, column 29
    function onPick_48 (PickedValue :  java.util.Set<gw.acc.npg.wizard.WizardFieldDTO>) : void {
      wizardDTO.Fields = PickedValue
    }
    
    // 'regex' attribute on TextInput (id=Code_Input) at NPGWizardProductAndLine_accScreen.pcf: line 40, column 42
    function regex_11 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.CODE.Pattern.pattern()
    }
    
    // 'regex' attribute on TextInput (id=Abbreviation_Input) at NPGWizardProductAndLine_accScreen.pcf: line 48, column 50
    function regex_16 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.LINE_ABBREVIATION.Pattern.pattern()
    }
    
    // 'regex' attribute on TextInput (id=EntitySuffix_Input) at NPGWizardProductAndLine_accScreen.pcf: line 56, column 50
    function regex_21 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.SUFFIX.Pattern.pattern()
    }
    
    // 'regex' attribute on TextInput (id=LineEntityName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 75, column 45
    function regex_31 () : java.lang.String {
      return gw.acc.npg.validators.NameConstraintValidator.RegexExpression.ENTITY_NAME.Pattern.pattern()
    }
    
    // 'value' attribute on TextInput (id=PackageName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 25, column 42
    function valueRoot_2 () : java.lang.Object {
      return wizardDTO
    }
    
    // 'value' attribute on TextInput (id=PackageName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 25, column 42
    function value_0 () : java.lang.String {
      return wizardDTO.PackageName
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at NPGWizardProductAndLine_accScreen.pcf: line 48, column 50
    function value_13 () : java.lang.String {
      return wizardDTO.ProductAbbreviation
    }
    
    // 'value' attribute on TextInput (id=EntitySuffix_Input) at NPGWizardProductAndLine_accScreen.pcf: line 56, column 50
    function value_18 () : java.lang.String {
      return wizardDTO.ProductEntitySuffix
    }
    
    // 'value' attribute on TextInput (id=LineCode_Input) at NPGWizardProductAndLine_accScreen.pcf: line 67, column 39
    function value_23 () : java.lang.String {
      return wizardDTO.LineCode
    }
    
    // 'value' attribute on TextInput (id=LineEntityName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 75, column 45
    function value_28 () : java.lang.String {
      return wizardDTO.LineEntityName
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeConditions_Input) at NPGWizardProductAndLine_accScreen.pcf: line 80, column 52
    function value_33 () : java.lang.Boolean {
      return wizardDTO.LineIncludeConditions
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeExclusions_Input) at NPGWizardProductAndLine_accScreen.pcf: line 85, column 52
    function value_37 () : java.lang.Boolean {
      return wizardDTO.LineIncludeExclusions
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at NPGWizardProductAndLine_accScreen.pcf: line 32, column 49
    function value_4 () : java.lang.String {
      return wizardDTO.ProductDisplayName
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeModifiers_Input) at NPGWizardProductAndLine_accScreen.pcf: line 90, column 51
    function value_41 () : java.lang.Boolean {
      return wizardDTO.LineIncludeModifiers
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at NPGWizardProductAndLine_accScreen.pcf: line 40, column 42
    function value_8 () : java.lang.String {
      return wizardDTO.ProductCode
    }
    
    property get wizardDTO () : gw.acc.npg.wizard.ProductInfoStepDTO {
      return getRequireValue("wizardDTO", 0) as gw.acc.npg.wizard.ProductInfoStepDTO
    }
    
    property set wizardDTO ($arg :  gw.acc.npg.wizard.ProductInfoStepDTO) {
      setRequireValue("wizardDTO", 0, $arg)
    }
    
    
  }
  
  
}