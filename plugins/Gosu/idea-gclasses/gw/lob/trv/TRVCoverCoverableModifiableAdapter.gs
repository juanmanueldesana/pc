package gw.lob.trv

uses gw.api.domain.ModifiableAdapter
uses java.util.Date
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverCoverableModifiableAdapter implements gw.api.domain.CoverableAdapter, ModifiableAdapter {
  delegate _coverableAdapter represents gw.api.domain.CoverableAdapter
  delegate _modifiableAdapter represents ModifiableAdapter

  construct(owner: entity.TRVCover) {
    _coverableAdapter = new TRVCoverCoverableAdapter (owner)
    _modifiableAdapter = new TRVCoverModifiableAdapter (owner)
  }

  override property get PolicyLine(): PolicyLine {
    return _coverableAdapter.PolicyLine
  }

  override property  get State(): Jurisdiction {
    return _coverableAdapter.State
  }

//  override property get ReferenceDateInternal(): Date {
//    return _coverableAdapter.ReferenceDateInternal
//  }
//
//  override property set ReferenceDateInternal(d: Date)  {
//    _coverableAdapter.ReferenceDateInternal = d
//  }

  override property get PolicyPeriod(): PolicyPeriod {
    return _modifiableAdapter.PolicyPeriod
  }
}