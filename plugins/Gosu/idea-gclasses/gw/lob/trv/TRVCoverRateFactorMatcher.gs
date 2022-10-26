package gw.lob.trv
uses gw.lob.common.AbstractRateFactorMatcher
uses java.lang.Iterable
uses gw.entity.ILinkPropertyInfo

@Export
class TRVCoverRateFactorMatcher extends AbstractRateFactorMatcher<TRVCoverRF> {

  construct(owner: entity.TRVCoverRF) {
    super(owner)
  }

  override property get ParentColumns(): Iterable<ILinkPropertyInfo> {
    return {TRVCoverRF.Type.TypeInfo.getProperty("TRVCoverModifier") as ILinkPropertyInfo};
  }

}