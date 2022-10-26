package gw.lob.trv
uses gw.coverage.ExclusionAdapterBase
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverExclExclusionAdapter extends ExclusionAdapterBase {
  var _owner: entity.TRVCoverExcl

  construct(owner: entity.TRVCoverExcl) {
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

  override function addToExclusionArray( p0: Exclusion ): void {
    _owner.TRVCover.addToExclusions( p0 as TRVCoverExcl )
  }

  override function removeFromParent(): void {
    _owner.TRVCover.removeFromExclusions( _owner )
  }

}