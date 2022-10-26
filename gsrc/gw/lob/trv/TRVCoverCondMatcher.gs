package gw.lob.trv
uses gw.lob.common.AbstractConditionMatcher
uses gw.entity.ILinkPropertyInfo

class TRVCoverCondMatcher extends AbstractConditionMatcher<TRVCoverCond> {
  construct(owner: entity.TRVCoverCond) {
    super(owner)
  }

  override property get Parent(): ILinkPropertyInfo {
    return TRVCoverCond.Type.TypeInfo.getProperty("TRVCover") as ILinkPropertyInfo
  }

}
