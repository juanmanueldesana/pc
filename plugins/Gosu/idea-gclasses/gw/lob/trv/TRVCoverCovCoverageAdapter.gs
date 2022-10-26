package gw.lob.trv

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverCovCoverageAdapter extends CoverageAdapterBase {

  var _owner: entity.TRVCoverCov

  construct(owner: entity.TRVCoverCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState(): Jurisdiction {
    return _owner.TRVCover.TRVLine.BaseState
  }

  override property get PolicyLine(): PolicyLine {
    return (_owner.TRVCover.TRVLine)
  }

  override property get OwningCoverable(): Coverable {
    return (_owner.TRVCover)
  }

  override function addToCoverageArray(p0: Coverage): void {
    _owner.TRVCover.addToCoverages(p0 as TRVCoverCov)
  }

  override function removeFromParent(): void {
    _owner.TRVCover.removeFromCoverages(_owner)
  }

  override property get ReinsurableCoverable(): ReinsurableCoverable {
    return _owner.BranchValue
  }
}