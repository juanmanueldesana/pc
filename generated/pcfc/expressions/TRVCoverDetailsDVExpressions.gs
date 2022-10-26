package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVCoverDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVCoverDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at TRVCoverDetailsDV.pcf: line 42, column 29
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.FirstName = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on CheckBoxInput (id=IsForeigner_Input) at TRVCoverDetailsDV.pcf: line 71, column 35
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.IsForeigner = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasChronicDisease_Input) at TRVCoverDetailsDV.pcf: line 76, column 40
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.HasChronicDisease = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ChronicDiseaseDetails_Input) at TRVCoverDetailsDV.pcf: line 86, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ChronicDiseaseDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasPreExisteningDisease_Input) at TRVCoverDetailsDV.pcf: line 91, column 46
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.HasPreExisteningDisease = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PreExisteningDiseaseDetails_Input) at TRVCoverDetailsDV.pcf: line 101, column 48
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.PreExisteningDiseaseDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Genre_Input) at TRVCoverDetailsDV.pcf: line 107, column 40
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.Genre = (__VALUE_TO_SET as typekey.Genre_Ext)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasDifferentAddress_Input) at TRVCoverDetailsDV.pcf: line 112, column 42
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.HasDifferentAddress = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DifferentAddressDetails_Input) at TRVCoverDetailsDV.pcf: line 122, column 44
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.DifferentAddressDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at TRVCoverDetailsDV.pcf: line 48, column 29
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.LastName = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on CheckBoxInput (id=HasHealthInsurance_Input) at TRVCoverDetailsDV.pcf: line 127, column 41
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.HasHealthInsurance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=HealthInsuranceDetails_Input) at TRVCoverDetailsDV.pcf: line 137, column 43
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.HealthInsuranceDetails = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on DateInput (id=BirthDate_Input) at TRVCoverDetailsDV.pcf: line 66, column 33
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.BirthDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at TRVCoverDetailsDV.pcf: line 42, column 29
    function valueRoot_2 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at TRVCoverDetailsDV.pcf: line 42, column 29
    function value_0 () : String {
      return item.FirstName
    }
    
    // 'value' attribute on CheckBoxInput (id=IsForeigner_Input) at TRVCoverDetailsDV.pcf: line 71, column 35
    function value_12 () : java.lang.Boolean {
      return item.IsForeigner
    }
    
    // 'value' attribute on CheckBoxInput (id=HasChronicDisease_Input) at TRVCoverDetailsDV.pcf: line 76, column 40
    function value_16 () : java.lang.Boolean {
      return item.HasChronicDisease
    }
    
    // 'value' attribute on TextInput (id=ChronicDiseaseDetails_Input) at TRVCoverDetailsDV.pcf: line 86, column 42
    function value_21 () : String {
      return item.ChronicDiseaseDetails
    }
    
    // 'value' attribute on CheckBoxInput (id=HasPreExisteningDisease_Input) at TRVCoverDetailsDV.pcf: line 91, column 46
    function value_26 () : java.lang.Boolean {
      return item.HasPreExisteningDisease
    }
    
    // 'value' attribute on TextInput (id=PreExisteningDiseaseDetails_Input) at TRVCoverDetailsDV.pcf: line 101, column 48
    function value_31 () : String {
      return item.PreExisteningDiseaseDetails
    }
    
    // 'value' attribute on TypeKeyInput (id=Genre_Input) at TRVCoverDetailsDV.pcf: line 107, column 40
    function value_36 () : typekey.Genre_Ext {
      return item.Genre
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at TRVCoverDetailsDV.pcf: line 48, column 29
    function value_4 () : String {
      return item.LastName
    }
    
    // 'value' attribute on CheckBoxInput (id=HasDifferentAddress_Input) at TRVCoverDetailsDV.pcf: line 112, column 42
    function value_40 () : java.lang.Boolean {
      return item.HasDifferentAddress
    }
    
    // 'value' attribute on TextInput (id=DifferentAddressDetails_Input) at TRVCoverDetailsDV.pcf: line 122, column 44
    function value_45 () : String {
      return item.DifferentAddressDetails
    }
    
    // 'value' attribute on CheckBoxInput (id=HasHealthInsurance_Input) at TRVCoverDetailsDV.pcf: line 127, column 41
    function value_50 () : java.lang.Boolean {
      return item.HasHealthInsurance
    }
    
    // 'value' attribute on TextInput (id=HealthInsuranceDetails_Input) at TRVCoverDetailsDV.pcf: line 137, column 43
    function value_55 () : String {
      return item.HealthInsuranceDetails
    }
    
    // 'value' attribute on DateInput (id=BirthDate_Input) at TRVCoverDetailsDV.pcf: line 66, column 33
    function value_8 () : java.util.Date {
      return item.BirthDate
    }
    
    property get item () : TRVCover {
      return getRequireValue("item", 0) as TRVCover
    }
    
    property set item ($arg :  TRVCover) {
      setRequireValue("item", 0, $arg)
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