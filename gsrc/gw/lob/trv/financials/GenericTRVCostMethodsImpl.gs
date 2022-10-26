package gw.lob.trv.financials

@Export
class GenericTRVCostMethodsImpl<T extends TRVCost> implements TRVCostMethods {

  protected var _owner: T as readonly Cost

  construct( owner: T ) {
    _owner = owner
  }

  override property get Coverage(): Coverage {
    return null
  }

  override property get OwningCoverable(): Coverable {
    return null
  }

  override property get Jurisdiction(): Jurisdiction {
    return null
  }

}