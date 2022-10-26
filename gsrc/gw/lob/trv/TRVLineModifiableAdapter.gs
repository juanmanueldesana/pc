package gw.lob.trv
uses gw.api.domain.ModifiableAdapter
uses java.util.Date
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineModifiableAdapter implements ModifiableAdapter {
  var _owner: entity.TRVLine

  construct(owner: entity.TRVLine) {
    _owner = owner
  }

  override property get AllModifiers(): Modifier[] {
    return _owner.TRVLineModifiers
  }

  override property get PolicyLine(): PolicyLine {
    return _owner
  }

  override property get PolicyPeriod(): PolicyPeriod {
    return _owner.Branch
  }

  override property get State(): Jurisdiction {
    return _owner.BaseState
  }

  override function addToModifiers(p0: Modifier) {
    _owner.addToTRVLineModifiers(p0 as TRVLineMod)
  }

  override function removeFromModifiers(p0: Modifier) {
    _owner.removeFromTRVLineModifiers(p0 as TRVLineMod)
  }

  override function createRawModifier(): Modifier {
    return new TRVLineMod(_owner.Branch)
  }

  override function postUpdateModifiers() {
  }

  override property get ReferenceDateInternal(): Date {
    return _owner.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(date: Date) {
    _owner.ReferenceDateInternal = date
  }
}