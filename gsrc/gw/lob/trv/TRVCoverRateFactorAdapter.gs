package gw.lob.trv
uses gw.api.domain.RateFactorAdapter

@Export
class TRVCoverRateFactorAdapter implements RateFactorAdapter {
  var _owner: TRVCoverRF

  construct(rateFactor: TRVCoverRF) {
    _owner = rateFactor
  }

  override property get Modifier(): Modifier {
    return _owner.TRVCoverModifier
  }
}