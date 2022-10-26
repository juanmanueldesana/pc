package gw.lob.trv
uses gw.lob.common.AbstractModifierMatcher
uses java.lang.Iterable
uses gw.entity.ILinkPropertyInfo

@Export
class TRVCoverModifierMatcher extends AbstractModifierMatcher<TRVCoverMod> {
  construct(owner : TRVCoverMod) {
    super(owner)
  }

  override property get ParentColumns() : Iterable<ILinkPropertyInfo> {
    return {TRVCoverMod.Type.TypeInfo.getProperty("TRVCover") as ILinkPropertyInfo}
  }
}