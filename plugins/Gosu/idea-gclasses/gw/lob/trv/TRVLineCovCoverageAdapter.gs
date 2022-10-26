package gw.lob.trv

uses gw.coverage.CoverageAdapterBase
uses gw.api.reinsurance.ReinsurableCoverable
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineCovCoverageAdapter extends CoverageAdapterBase {

  var _owner: entity.TRVLineCov

  construct(owner: entity.TRVLineCov) {
    super(owner)
    _owner = owner
  }

  override property get CoverageState(): Jurisdiction {
    return _owner.TRVLine.BaseState
  }

  override property get PolicyLine(): PolicyLine {
    return (_owner.TRVLine)
  }

  override property get OwningCoverable(): Coverable {
    return (_owner.TRVLine)
  }

  override function addToCoverageArray(p0: Coverage): void {
    _owner.TRVLine.addToTRVLineCoverages(p0 as TRVLineCov)
  }

  override function removeFromParent(): void {
    _owner.TRVLine.removeFromTRVLineCoverages(_owner)
  }

  override property get ReinsurableCoverable(): ReinsurableCoverable {
    return _owner.BranchValue
  }
}