package gw.lob.trv

uses gw.api.domain.CoverableAdapter
uses java.util.Date
uses java.util.HashSet
uses gw.policy.PolicyLineConfiguration
uses gw.api.util.JurisdictionMappingUtil

@Export
class TRVLineCoverableAdapter implements CoverableAdapter {

  var _owner: entity.TRVLine

  construct(owner: entity.TRVLine) {
    _owner = owner
  }

  override property get PolicyLine(): PolicyLine {
    return _owner
  }

  override property get State(): Jurisdiction {
    return _owner.BaseState
  }

  override property get PolicyLocations(): PolicyLocation[] {
    var locs = new HashSet<PolicyLocation>()
    return locs.toTypedArray()
  }

  override function addCoverage( p0: Coverage ): void {
    _owner.addToTRVLineCoverages( p0 as TRVLineCov )
  }

  override function removeCoverage( p0: Coverage ): void {
    _owner.removeFromTRVLineCoverages( p0 as TRVLineCov )
  }

  override property get CoveragesFromCoverable(): Coverage[] {
    return _owner.TRVLineCoverages
  }

  override property get ExclusionsFromCoverable(): Exclusion[] {
    return new Exclusion[0]
  }

  override function addExclusion( p0: Exclusion ): void {
    _owner.addToTRVLineExclusions( p0 as TRVLineExcl )
  }

  override function removeExclusion( p0: Exclusion ): void {
    _owner.removeFromTRVLineExclusions( p0 as TRVLineExcl )
  }

  override property get ConditionsFromCoverable(): PolicyCondition[] {
    return new PolicyCondition[0]
  }

  override function addCondition( p0: PolicyCondition ): void {
    _owner.addToTRVLineConditions( p0 as TRVLineCond )
  }

  override function removeCondition( p0: PolicyCondition ): void {
    _owner.removeFromTRVLineConditions( p0 as TRVLineCond )
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