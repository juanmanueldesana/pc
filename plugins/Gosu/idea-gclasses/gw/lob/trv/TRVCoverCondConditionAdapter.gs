package gw.lob.trv
uses gw.coverage.ConditionAdapterBase
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverCondConditionAdapter extends ConditionAdapterBase {
  var _owner: entity.TRVCoverCond

  construct(owner: entity.TRVCoverCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState(): Jurisdiction {
    return _owner.TRVCover.TRVLine.BaseState
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.TRVCover.TRVLine
  }

  override property get OwningCoverable(): Coverable {
    return _owner.TRVCover
  }

  override function addToConditionArray( p0: PolicyCondition ): void {
    _owner.TRVCover.addToConditions( p0 as TRVCoverCond )
  }

  override function removeFromParent(): void {
    _owner.TRVCover.removeFromConditions( _owner )
  }

}