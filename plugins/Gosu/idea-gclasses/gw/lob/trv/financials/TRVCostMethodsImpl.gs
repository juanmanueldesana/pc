package gw.lob.trv.financials

@Export
class TRVCostMethodsImpl extends GenericTRVCostMethodsImpl<TRVCost> {

  construct(owner: entity.TRVCost) {
    super(owner)
  }

  override property get Jurisdiction(): Jurisdiction {
    return _owner.TRVLine.Branch.BaseState
  }

}