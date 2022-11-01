package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/NewContactTravelerDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactTravelerDetailsCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/NewContactTravelerDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactTravelerDetailsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at NewContactTravelerDetailsCV.pcf: line 122, column 29
    function def_onEnter_54 (def :  pcf.OfficialIDTravelerLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 131, column 161
    function def_onEnter_56 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(primaryAddress, policyContactRole.AccountContactRole.AccountContact.Contact, period, period.Policy.Account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 134, column 60
    function def_onEnter_59 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(primaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 54, column 58
    function def_onEnter_7 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 54, column 58
    function def_onEnter_9 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 54, column 58
    function def_refreshVariables_10 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on ListViewInput at NewContactTravelerDetailsCV.pcf: line 122, column 29
    function def_refreshVariables_55 (def :  pcf.OfficialIDTravelerLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 131, column 161
    function def_refreshVariables_57 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(primaryAddress, policyContactRole.AccountContactRole.AccountContact.Contact, period, period.Policy.Account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 134, column 60
    function def_refreshVariables_60 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(primaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 54, column 58
    function def_refreshVariables_8 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'value' attribute on CheckBoxInput (id=IsForeigner_Input) at NewContactTravelerDetailsCV.pcf: line 59, column 41
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.IsForeigner = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=BirthDate_Input) at NewContactTravelerDetailsCV.pcf: line 64, column 50
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyContactRole.DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Genre_Input) at NewContactTravelerDetailsCV.pcf: line 70, column 42
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.Genre = (__VALUE_TO_SET as typekey.Genre_Ext)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasChronicDisease_Input) at NewContactTravelerDetailsCV.pcf: line 78, column 46
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.HasChronicDisease = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ChronicDiseaseDetails_Input) at NewContactTravelerDetailsCV.pcf: line 88, column 48
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.ChronicDiseaseDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasPreExisteningDisease_Input) at NewContactTravelerDetailsCV.pcf: line 93, column 52
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.HasPreExisteningDisease = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PreExisteningDiseaseDetails_Input) at NewContactTravelerDetailsCV.pcf: line 103, column 54
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.PreExisteningDiseaseDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasHealthInsurance_Input) at NewContactTravelerDetailsCV.pcf: line 108, column 47
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.HasHealthInsurance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=HealthInsuranceDetails_Input) at NewContactTravelerDetailsCV.pcf: line 118, column 49
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      traveler.HealthInsuranceDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at NewContactTravelerDetailsCV.pcf: line 141, column 44
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      primaryAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'editable' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 134, column 60
    function editable_58 () : java.lang.Boolean {
      return primaryAddress.LinkedAddress == null
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 13, column 59
    function initialValue_0 () : gw.globalization.PolicyContactRoleNameAdapter {
      return new gw.globalization.PolicyContactRoleNameAdapter(policyContactRole)
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 18, column 28
    function initialValue_1 () : entity.Contact {
      return policyContactRole.AccountContactRole.AccountContact.Contact
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 23, column 33
    function initialValue_2 () : entity.PolicyPeriod {
      return policyContactRole.Branch
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 28, column 28
    function initialValue_3 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 33, column 73
    function initialValue_4 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 38, column 21
    function initialValue_5 () : boolean {
      return openForEditOverride or openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at NewContactTravelerDetailsCV.pcf: line 43, column 22
    function initialValue_6 () : Traveler {
      return (policyContactRole.AccountContactRole as Traveler)
    }
    
    // 'mode' attribute on InputSetRef at NewContactTravelerDetailsCV.pcf: line 54, column 58
    function mode_11 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on CheckBoxInput (id=IsForeigner_Input) at NewContactTravelerDetailsCV.pcf: line 59, column 41
    function valueRoot_14 () : java.lang.Object {
      return traveler
    }
    
    // 'value' attribute on DateInput (id=BirthDate_Input) at NewContactTravelerDetailsCV.pcf: line 64, column 50
    function valueRoot_18 () : java.lang.Object {
      return policyContactRole
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at NewContactTravelerDetailsCV.pcf: line 141, column 44
    function valueRoot_64 () : java.lang.Object {
      return primaryAddress
    }
    
    // 'value' attribute on CheckBoxInput (id=IsForeigner_Input) at NewContactTravelerDetailsCV.pcf: line 59, column 41
    function value_12 () : java.lang.Boolean {
      return traveler.IsForeigner
    }
    
    // 'value' attribute on DateInput (id=BirthDate_Input) at NewContactTravelerDetailsCV.pcf: line 64, column 50
    function value_16 () : java.util.Date {
      return policyContactRole.DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=Genre_Input) at NewContactTravelerDetailsCV.pcf: line 70, column 42
    function value_20 () : typekey.Genre_Ext {
      return traveler.Genre
    }
    
    // 'value' attribute on CheckBoxInput (id=HasChronicDisease_Input) at NewContactTravelerDetailsCV.pcf: line 78, column 46
    function value_24 () : java.lang.Boolean {
      return traveler.HasChronicDisease
    }
    
    // 'value' attribute on TextInput (id=ChronicDiseaseDetails_Input) at NewContactTravelerDetailsCV.pcf: line 88, column 48
    function value_29 () : String {
      return traveler.ChronicDiseaseDetails
    }
    
    // 'value' attribute on CheckBoxInput (id=HasPreExisteningDisease_Input) at NewContactTravelerDetailsCV.pcf: line 93, column 52
    function value_34 () : java.lang.Boolean {
      return traveler.HasPreExisteningDisease
    }
    
    // 'value' attribute on TextInput (id=PreExisteningDiseaseDetails_Input) at NewContactTravelerDetailsCV.pcf: line 103, column 54
    function value_39 () : String {
      return traveler.PreExisteningDiseaseDetails
    }
    
    // 'value' attribute on CheckBoxInput (id=HasHealthInsurance_Input) at NewContactTravelerDetailsCV.pcf: line 108, column 47
    function value_44 () : java.lang.Boolean {
      return traveler.HasHealthInsurance
    }
    
    // 'value' attribute on TextInput (id=HealthInsuranceDetails_Input) at NewContactTravelerDetailsCV.pcf: line 118, column 49
    function value_49 () : String {
      return traveler.HealthInsuranceDetails
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at NewContactTravelerDetailsCV.pcf: line 141, column 44
    function value_62 () : typekey.AddressType {
      return primaryAddress.AddressType
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get openForEditOverride () : boolean {
      return getRequireValue("openForEditOverride", 0) as java.lang.Boolean
    }
    
    property set openForEditOverride ($arg :  boolean) {
      setRequireValue("openForEditOverride", 0, $arg)
    }
    
    property get period () : entity.PolicyPeriod {
      return getVariableValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyContactRoleAdapter () : gw.globalization.PolicyContactRoleNameAdapter {
      return getVariableValue("policyContactRoleAdapter", 0) as gw.globalization.PolicyContactRoleNameAdapter
    }
    
    property set policyContactRoleAdapter ($arg :  gw.globalization.PolicyContactRoleNameAdapter) {
      setVariableValue("policyContactRoleAdapter", 0, $arg)
    }
    
    property get primaryAddress () : entity.Address {
      return getVariableValue("primaryAddress", 0) as entity.Address
    }
    
    property set primaryAddress ($arg :  entity.Address) {
      setVariableValue("primaryAddress", 0, $arg)
    }
    
    property get traveler () : Traveler {
      return getVariableValue("traveler", 0) as Traveler
    }
    
    property set traveler ($arg :  Traveler) {
      setVariableValue("traveler", 0, $arg)
    }
    
    
  }
  
  
}