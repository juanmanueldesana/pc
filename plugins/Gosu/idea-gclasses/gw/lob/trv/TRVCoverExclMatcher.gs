package gw.lob.trv
uses gw.lob.common.AbstractExclusionMatcher
uses gw.entity.ILinkPropertyInfo

class TRVCoverExclMatcher extends AbstractExclusionMatcher<TRVCoverExcl> {
  construct(owner: entity.TRVCoverExcl) {
    super(owner)
  }

  override property get Parent(): ILinkPropertyInfo {
    return TRVCoverExcl.Type.TypeInfo.getProperty("TRVCover") as ILinkPropertyInfo
  }

}