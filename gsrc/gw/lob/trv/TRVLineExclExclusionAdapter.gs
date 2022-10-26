package gw.lob.trv
uses gw.coverage.ExclusionAdapterBase
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineExclExclusionAdapter extends ExclusionAdapterBase {
  var _owner: entity.TRVLineExcl

  construct(owner: entity.TRVLineExcl) {
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

  override function addToExclusionArray( p0: Exclusion ): void {
    _owner.TRVLine.addToTRVLineExclusions( p0 as TRVLineExcl )
  }

  override function removeFromParent(): void {
    _owner.TRVLine.removeFromTRVLineExclusions( _owner )
  }

}