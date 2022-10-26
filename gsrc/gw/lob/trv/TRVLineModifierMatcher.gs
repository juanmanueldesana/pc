package gw.lob.trv
uses gw.lob.common.AbstractModifierMatcher
uses java.lang.Iterable
uses gw.entity.ILinkPropertyInfo

@Export
class TRVLineModifierMatcher extends AbstractModifierMatcher<TRVLineMod> {
  construct(owner : TRVLineMod) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {TRVLineMod.Type.TypeInfo.getProperty("TRVLine") as ILinkPropertyInfo}
  }
}