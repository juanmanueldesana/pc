package gw.lob.trv

uses gw.policy.PolicyLineConfiguration
uses gw.plugin.rateflow.IRateRoutineConfig
uses gw.lob.trv.rating.TRVRateRoutineConfig
uses gw.api.productmodel.PolicyLinePatternLookup

class TRVConfiguration extends PolicyLineConfiguration{

  override property get RateRoutineConfig() : IRateRoutineConfig {
    return new TRVRateRoutineConfig()
  }

  override property get AllowedCurrencies() : List<Currency>  {
    var pattern = PolicyLinePatternLookup.getByCodeIdentifier(InstalledPolicyLine.TC_TRV.UnlocalizedName)
    return pattern.AvailableCurrenciesByPriority
  }

}