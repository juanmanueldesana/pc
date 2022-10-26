package gw.lob.trv.financials

uses gw.api.domain.financials.TransactionAdapter

@Export
class TRVTransactionAdapter implements TransactionAdapter {

  var _owner: entity.TRVTransaction

  construct(owner: entity.TRVTransaction) {
    _owner = owner
  }

  override property get Cost(): Cost {
    return _owner.TRVCost
  }

}