package gw.lob.trv.financials

/**
 * Additional methods and properties provided by the costs that supply this interface.
 */
@Export
interface TRVCostMethods {

  property get Coverage(): Coverage

  property get OwningCoverable(): Coverable

  property get Jurisdiction(): Jurisdiction
}