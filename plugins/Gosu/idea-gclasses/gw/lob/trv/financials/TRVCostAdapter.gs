package gw.lob.trv.financials

uses gw.api.domain.financials.CostAdapter
uses gw.api.reinsurance.ReinsurableCoverable

@Export
class TRVCostAdapter implements CostAdapter {

  var _owner: entity.TRVCost

  construct(owner: entity.TRVCost) {
    _owner = owner
  }

  override function createTransaction(branch: PolicyPeriod): Transaction {
    var transaction = new TRVTransaction(branch, branch.PeriodStart, branch.PeriodEnd)
    transaction.TRVCost = _owner.Unsliced
    return transaction
  }

  override property get Reinsurable(): Reinsurable {
    if (_owner.Coverage == null) {
      return null
    }
    var rCov: ReinsurableCoverable = _owner.Coverage.ReinsurableCoverable
    var candidates = rCov.Reinsurables.where(\r -> r.CoverageGroup == _owner.Coverage.RICoverageGroupType)
    return candidates.HasElements ? candidates.single() : null
  }

  override property get Coverable(): Coverable {
    return _owner.OwningCoverable
  }

  override property get NameOfCoverable(): String {
    if (_owner.OwningCoverable != null) {
      return _owner.OwningCoverable.DisplayName
    }
    return ""
  }

  override function isMatchingBean(bean: KeyableBean): boolean {
    return false
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.TRVLine
  }
}