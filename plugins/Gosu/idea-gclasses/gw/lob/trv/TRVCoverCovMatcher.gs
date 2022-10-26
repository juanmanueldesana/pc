package gw.lob.trv
uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class TRVCoverCovMatcher extends AbstractCoverageMatcher<TRVCoverCov> {
  construct(owner: entity.TRVCoverCov) {
    super(owner)
  }

  override property get CoverableColumns(): List<ILinkPropertyInfo> {
    return {TRVCoverCov.Type.TypeInfo.getProperty("TRVCover") as ILinkPropertyInfo}
  }

}