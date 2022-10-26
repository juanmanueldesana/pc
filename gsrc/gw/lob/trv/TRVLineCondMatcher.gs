package gw.lob.trv
uses gw.lob.common.AbstractConditionMatcher
uses gw.entity.ILinkPropertyInfo

class TRVLineCondMatcher extends AbstractConditionMatcher<TRVLineCond> {
  construct(owner: entity.TRVLineCond) {
    super(owner)
  }

  override property get Parent(): ILinkPropertyInfo {
    return TRVLineCond.Type.TypeInfo.getProperty("TRVLine") as ILinkPropertyInfo
  }

}
