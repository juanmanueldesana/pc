package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/address/GlobalAddressInputSet.PostCodeBeforeCityState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GlobalAddressInputSet_PostCodeBeforeCityStateExpressions {
  @javax.annotation.Generated("config/web/pcf/address/GlobalAddressInputSet.PostCodeBeforeCityState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GlobalAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 104, column 81
    function action_107 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City")
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_56 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 86, column 87
    function action_75 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_90 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City")
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_102 () : gw.api.contact.AutocompleteHandler {
      return cityhandler
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_69 () : gw.api.contact.AutocompleteHandler {
      return pchandler
    }
    
    // 'available' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 104, column 81
    function available_103 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'available' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function available_121 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'available' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function available_140 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CEDEX)
    }
    
    // 'available' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function available_151 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CEDEXBUREAU)
    }
    
    // 'available' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function available_20 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'available' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function available_33 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'available' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function available_44 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE3)
    }
    
    // 'available' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 86, column 87
    function available_71 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'available' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function available_9 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.SelectedCountry = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.CEDEX = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.CEDEXBureau = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine3 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function editable_10 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'editable' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function editable_122 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'editable' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function editable_141 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CEDEX)
    }
    
    // 'editable' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function editable_152 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CEDEXBUREAU)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function editable_21 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function editable_34 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function editable_45 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE3)
    }
    
    // 'editable' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function editable_59 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'editable' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function editable_93 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 14, column 50
    function initialValue_0 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("City","City,PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 18, column 50
    function initialValue_1 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("PostalCode","City,PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 25, column 33
    function initialValue_2 () : java.lang.Integer {
      if (addressOwner != null) addressOwner.InEditMode = CurrentLocation.InEditMode; return 0
    }
    
    // 'inputConversion' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputConversion_64 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.address.PostalCodeInputFormatter.convertPostalCode(VALUE, addressOwner.SelectedCountry)
    }
    
    // 'inputMask' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputMask_70 () : java.lang.String {
      return gw.api.contact.AddressAutocompleteUtil.getInputMask(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'label' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function label_125 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).StateLabel
    }
    
    // 'label' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function label_23 () : java.lang.Object {
      return addressOwner.AddressLine1Label
    }
    
    // 'label' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 31, column 50
    function label_4 () : java.lang.Object {
      return addressOwner.AddressNameLabel
    }
    
    // 'label' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function label_57 () : java.lang.Object {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'label' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function label_62 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel
    }
    
    // 'label' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function label_96 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).CityLabel
    }
    
    // 'onChange' attribute on PostOnChange at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 123, column 42
    function onChange_120 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "State", false)
    }
    
    // 'onChange' attribute on PostOnChange at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 135, column 31
    function onChange_139 () : void {
      if (not addressOwner.AddressDelegate.CEDEX) addressOwner.AddressDelegate.CEDEXBureau = null
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 89, column 42
    function onChange_58 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode", false)
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=City_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 107, column 42
    function onChange_92 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "City", false)
    }
    
    // 'required' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function required_12 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'required' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function required_126 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'required' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function required_143 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.CEDEX)
    }
    
    // 'required' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function required_154 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.CEDEXBUREAU)
    }
    
    // 'required' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function required_24 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'required' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function required_36 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'required' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function required_47 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE3)
    }
    
    // 'required' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function required_65 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'required' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function required_98 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'tooltip' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 86, column 87
    function tooltip_77 () : java.lang.String {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'validationExpression' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function validationExpression_123 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "State")
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_60 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "PostalCode", gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel)
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_94 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "City")
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function valueRange_130 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function valueRoot_15 () : java.lang.Object {
      return addressOwner
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function valueRoot_27 () : java.lang.Object {
      return addressOwner.AddressDelegate
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function value_127 () : typekey.State {
      return addressOwner.AddressDelegate.State
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function value_13 () : typekey.Country {
      return addressOwner.SelectedCountry
    }
    
    // 'value' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function value_144 () : java.lang.Boolean {
      return addressOwner.AddressDelegate.CEDEX
    }
    
    // 'value' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function value_155 () : java.lang.String {
      return addressOwner.AddressDelegate.CEDEXBureau
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function value_25 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function value_37 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function value_48 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine3
    }
    
    // 'value' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 31, column 50
    function value_5 () : java.lang.String {
      return new gw.api.address.AddressFormatter().format(addressOwner.AddressDelegate, "\n")
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_66 () : java.lang.String {
      return addressOwner.AddressDelegate.PostalCode
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_99 () : java.lang.String {
      return addressOwner.AddressDelegate.City
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function verifyValueRangeIsAllowedType_131 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function verifyValueRangeIsAllowedType_131 ($$arg :  typekey.State[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function verifyValueRange_132 () : void {
      var __valueRangeArg = gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_131(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 43, column 84
    function visible_11 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'visible' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 120, column 82
    function visible_124 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'visible' attribute on CheckBoxInput (id=CEDEX_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 132, column 82
    function visible_142 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CEDEX)
    }
    
    // 'visible' attribute on TextInput (id=CEDEXBureau_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 144, column 128
    function visible_153 () : java.lang.Boolean {
      return addressOwner.AddressDelegate.CEDEX and addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CEDEXBUREAU)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 54, column 90
    function visible_22 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'visible' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 31, column 50
    function visible_3 () : java.lang.Boolean {
      return addressOwner.ShowAddressSummary
    }
    
    // 'visible' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 62, column 90
    function visible_35 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine3_Input) at GlobalAddressInputSet.PostCodeBeforeCityState.pcf: line 70, column 90
    function visible_46 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE3)
    }
    
    // 'visible' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_55 () : java.lang.Boolean {
      return addressOwner.AutofillIconEnabled
    }
    
    // 'visible' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_61 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'visible' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_95 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    property get cityhandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("cityhandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set cityhandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("cityhandler", 0, $arg)
    }
    
    property get pchandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("pchandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("pchandler", 0, $arg)
    }
    
    property get saveEditMode () : java.lang.Integer {
      return getVariableValue("saveEditMode", 0) as java.lang.Integer
    }
    
    property set saveEditMode ($arg :  java.lang.Integer) {
      setVariableValue("saveEditMode", 0, $arg)
    }
    
    
  }
  
  
}