package gw.lob.trv
uses gw.api.domain.ModifiableAdapter
uses java.util.Date
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverModifiableAdapter implements ModifiableAdapter {
  var _owner: entity.TRVCover

  construct(owner: entity.TRVCover) {
    _owner = owner
  }

  override property get AllModifiers(): Modifier[] {
    return _owner.Modifiers
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.TRVLine
  }

  override property get PolicyPeriod(): PolicyPeriod {
    return _owner.Branch
  }

  override property get State(): Jurisdiction {
    return _owner.TRVLine.BaseState
  }

  override function addToModifiers(p0: Modifier) {
    _owner.addToModifiers(p0 as TRVCoverMod)
  }

  override function removeFromModifiers(p0: Modifier) {
    _owner.removeFromModifiers(p0 as TRVCoverMod)
  }

  override function createRawModifier(): Modifier {
    return new TRVCoverMod(_owner.Branch)
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