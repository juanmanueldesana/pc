package gw.lob.trv
uses gw.coverage.AbstractCoverageMatcher
uses gw.entity.ILinkPropertyInfo

class TRVLineCovMatcher extends AbstractCoverageMatcher<TRVLineCov> {
  construct(owner: entity.TRVLineCov) {
    super(owner)
  }

  override property get CoverableColumns(): List<ILinkPropertyInfo> {
    return {TRVLineCov.Type.TypeInfo.getProperty("TRVLine") as ILinkPropertyInfo}
  }

}