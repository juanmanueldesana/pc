package gw.lob.trv
uses gw.api.domain.ModifierAdapter

@Export
class TRVLineModifierAdapter implements ModifierAdapter {
  var _owner: entity.TRVLineMod

  construct(owner: entity.TRVLineMod) {
    _owner = owner
  }

  override property get OwningModifiable(): Modifiable {
    return _owner.TRVLine
  }

  override property get RateFactors(): RateFactor[] {
    return _owner.TRVLineRateFactors
  }

  override function addToRateFactors(p0: RateFactor) {
    _owner.addToTRVLineRateFactors(p0 as TRVLineRF)
  }

  override function createRawRateFactor(): RateFactor {
    return new TRVLineRF(_owner.Branch)
  }

  override function removeFromRateFactors(p0: RateFactor) {
    _owner.removeFromTRVLineRateFactors(p0 as TRVLineRF)
  }
}