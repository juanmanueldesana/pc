package gw.lob.trv
uses gw.coverage.ConditionAdapterBase
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineCondConditionAdapter extends ConditionAdapterBase {
  var _owner: entity.TRVLineCond

  construct(owner: entity.TRVLineCond) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState(): Jurisdiction {
    return _owner.TRVLine.BaseState
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.TRVLine
  }

  override property get OwningCoverable(): Coverable {
    return _owner.TRVLine
  }

  override function addToConditionArray( p0: PolicyCondition ): void {
    _owner.TRVLine.addToTRVLineConditions( p0 as TRVLineCond )
  }

  override function removeFromParent(): void {
    _owner.TRVLine.removeFromTRVLineConditions( _owner )
  }

}