package gw.lob.trv
uses gw.api.domain.ModifierAdapter

@Export
class TRVCoverModifierAdapter implements ModifierAdapter {
  var _owner: entity.TRVCoverMod

  construct(owner: entity.TRVCoverMod) {
    _owner = owner
  }

  override property get OwningModifiable(): Modifiable {
    return _owner.TRVCover
  }

  override property get RateFactors(): RateFactor[] {
    return _owner.TRVCoverRateFactors
  }

  override function addToRateFactors(p0: RateFactor) {
    _owner.addToTRVCoverRateFactors(p0 as TRVCoverRF)
  }

  override function createRawRateFactor(): RateFactor {
    return new TRVCoverRF(_owner.Branch)
  }

  override function removeFromRateFactors(p0: RateFactor) {
    _owner.removeFromTRVCoverRateFactors(p0 as TRVCoverRF)
  }
}