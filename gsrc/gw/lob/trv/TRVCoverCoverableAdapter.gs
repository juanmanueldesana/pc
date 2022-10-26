package gw.lob.trv

uses gw.api.domain.CoverableAdapter
uses java.util.Date
uses java.util.HashSet
uses gw.policy.PolicyLineConfiguration
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVCoverCoverableAdapter implements CoverableAdapter {

  var _owner: entity.TRVCover

  construct(owner: entity.TRVCover) {
    _owner = owner
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.TRVLine
  }

  override property get State(): Jurisdiction {
    return _owner.TRVLine.BaseState
  }

  override property get PolicyLocations(): PolicyLocation[] {
    return null
  }

  override function addCoverage( p0: Coverage ): void {
    _owner.addToCoverages( p0 as TRVCoverCov )
  }

  override function removeCoverage( p0: Coverage ): void {
    _owner.removeFromCoverages( p0 as TRVCoverCov )
  }

  override property get CoveragesFromCoverable(): Coverage[] {
    return _owner.Coverages
  }

  override property get ExclusionsFromCoverable(): Exclusion[] {
    return new Exclusion[0]
  }

  override function addExclusion( p0: Exclusion ): void {
    _owner.addToExclusions( p0 as TRVCoverExcl )
  }

  override function removeExclusion( p0: Exclusion ): void {
    _owner.removeFromExclusions( p0 as TRVCoverExcl )
  }

  override property get ConditionsFromCoverable(): PolicyCondition[] {
    return new PolicyCondition[0]
  }

  override function addCondition( p0: PolicyCondition ): void {
    _owner.addToConditions( p0 as TRVCoverCond )
  }

  override function removeCondition( p0: PolicyCondition ): void {
    _owner.removeFromConditions( p0 as TRVCoverCond )
  }

//  override property get ReferenceDateInternal(): Date {
//    return _owner.ReferenceDateInternal
//  }
//
//  override property set ReferenceDateInternal( date: Date ) {
//    _owner.ReferenceDateInternal = date
//  }

  override property get DefaultCurrency(): Currency {
    return _owner.Branch.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies(): List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_TRV).AllowedCurrencies
  }
  
  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return {}
  }
}