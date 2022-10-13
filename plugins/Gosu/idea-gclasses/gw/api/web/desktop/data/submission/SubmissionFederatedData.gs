package gw.api.web.desktop.data.submission

uses gw.api.iterator.IteratorBackingDataSorting
uses gw.api.util.DisplayableException
uses gw.api.web.desktop.data.FederatedDataIteratorBackingData

@Export
class SubmissionFederatedData extends FederatedDataIteratorBackingData<SubmissionDTO> {

  override function getEntries(startIndex : int, numEntries : int, sortings : List<IteratorBackingDataSorting>) : List<SubmissionDTO> {
    return Plugin.findSubmissions(UserId, Filter, startIndex, numEntries, sortings) as List<SubmissionDTO>
  }

  override protected property get EntryCount() : int {
    try {
      return Plugin.getSubmissionCount(UserId, Filter)
    } catch (ex : DisplayableException) {
      _logger.error("Could not get entry count.", ex)
    }
    return 0
  }

}