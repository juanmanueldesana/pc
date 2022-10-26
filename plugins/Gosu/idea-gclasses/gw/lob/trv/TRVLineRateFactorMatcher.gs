package gw.lob.trv
uses gw.lob.common.AbstractRateFactorMatcher
uses java.lang.Iterable
uses gw.entity.ILinkPropertyInfo

@Export
class TRVLineRateFactorMatcher extends AbstractRateFactorMatcher<TRVLineRF> {

  construct(owner: entity.TRVLineRF) {
    super(owner)
  }

  override property get ParentColumns(): Iterable<ILinkPropertyInfo> {
    return {TRVLineRF.Type.TypeInfo.getProperty("TRVLineModifier") as ILinkPropertyInfo};
  }

}