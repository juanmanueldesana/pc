package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PreferredCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PreferredCurrencyInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PreferredCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreferredCurrencyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at PreferredCurrencyInputSet.pcf: line 31, column 36
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.PreferredSettlementCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at PreferredCurrencyInputSet.pcf: line 21, column 37
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at PreferredCurrencyInputSet.pcf: line 21, column 37
    function editable_0 () : java.lang.Boolean {
      return policyPeriod.Job.isNewTerm()
    }
    
    // 'onChange' attribute on PostOnChange at PreferredCurrencyInputSet.pcf: line 33, column 71
    function onChange_6 () : void {
      policyPeriod.preferredSettlementCurrencyUpdated()
    }
    
    // 'requestValidationExpression' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at PreferredCurrencyInputSet.pcf: line 31, column 36
    function requestValidationExpression_8 (VALUE :  typekey.Currency) : java.lang.Object {
      return not policyPeriod.Job.UpFrontPayments.allMatch(\upfp -> upfp.Amount_cur == VALUE) ? DisplayKey.get("Web.MultiCurrency.ChangePreferredSettlementCurrencyWithPayment.Error") : null
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at PreferredCurrencyInputSet.pcf: line 21, column 37
    function valueRoot_3 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at PreferredCurrencyInputSet.pcf: line 21, column 37
    function value_1 () : typekey.Currency {
      return policyPeriod.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at PreferredCurrencyInputSet.pcf: line 31, column 36
    function value_9 () : typekey.Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'visible' attribute on InputSet (id=PreferredCurrencyInputSet) at PreferredCurrencyInputSet.pcf: line 7, column 62
    function visible_14 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get AllPossibleCoverageCurrencies() : Currency[] {
      var result = policyPeriod.Lines*.Pattern.flatMap(\p -> p.AvailableCoverageCurrencies*.Currency).toSet()
      return result.toTypedArray()
    }
    
    
  }
  
  
}