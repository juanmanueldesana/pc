package gw.lob.trv

uses gw.api.domain.ModifiableAdapter
uses java.util.Date
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineCoverableModifiableAdapter implements gw.api.domain.CoverableAdapter, ModifiableAdapter {
  delegate _coverableAdapter represents gw.api.domain.CoverableAdapter
  delegate _modifiableAdapter represents ModifiableAdapter

  construct(owner: entity.TRVLine) {
    _coverableAdapter = new TRVLineCoverableAdapter (owner)
    _modifiableAdapter = new TRVLineModifiableAdapter (owner)
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

}