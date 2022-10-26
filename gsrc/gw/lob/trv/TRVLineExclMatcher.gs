package gw.lob.trv
uses gw.lob.common.AbstractExclusionMatcher
uses gw.entity.ILinkPropertyInfo

class TRVLineExclMatcher extends AbstractExclusionMatcher<TRVLineExcl> {
  construct(owner: entity.TRVLineExcl) {
    super(owner)
  }

  override property get Parent(): ILinkPropertyInfo {
    return TRVLineExcl.Type.TypeInfo.getProperty("TRVLine") as ILinkPropertyInfo
  }

}