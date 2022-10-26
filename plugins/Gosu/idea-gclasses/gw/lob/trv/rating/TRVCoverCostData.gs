package gw.lob.trv.rating

uses gw.financials.PolicyPeriodFXRateCache
uses gw.api.effdate.EffDatedUtil
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses entity.windowed.TRVCoverCostVersionList

uses java.util.Date

uses gw.pl.persistence.core.Key

class TRVCoverCostData extends TRVCostData<TRVCoverCost> {

  construct(effDate: Date, expDate: Date, c: Currency, rateCache: PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(effDate: Date, expDate: Date) {
    super(effDate, expDate)
  }

  construct(cost: TRVCoverCost) {
    super(cost)
  }

  construct(cost: TRVCoverCost, rateCache: PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function setSpecificFieldsOnCost(line: TRVLine, costEntity: TRVCoverCost): void {
    super.setSpecificFieldsOnCost(line, costEntity)
  }

  override function getVersionedCosts(line: TRVLine): List<EffDatedVersionList> {
    return line.VersionList.TRVCoverCosts.where(\costVL -> isCostVersionListForThisCostData(costVL))
  }

  private function isCostVersionListForThisCostData(costVL: TRVCoverCostVersionList): boolean {
    var v1 = costVL.AllVersions.first()
    return ((v1 typeis TRVCoverCost))
  }

  protected override property get KeyValues(): List<Object> {
    var result: List<Object> = {}
    result.addAll(super.KeyValues)
    return result
  }
}