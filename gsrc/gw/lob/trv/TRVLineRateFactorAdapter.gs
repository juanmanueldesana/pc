package gw.lob.trv
uses gw.api.domain.RateFactorAdapter

@Export
class TRVLineRateFactorAdapter implements RateFactorAdapter {
  var _owner: TRVLineRF

  construct(rateFactor: TRVLineRF) {
    _owner = rateFactor
  }

  override property get Modifier(): Modifier {
    return _owner.TRVLineModifier
  }
}