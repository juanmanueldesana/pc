package gw.api.web.desktop.data.activity

uses gw.api.iterator.IteratorBackingDataSorting
uses gw.api.util.DisplayableException
uses gw.api.web.desktop.data.FederatedDataIteratorBackingData

@Export
class ActivityFederatedData extends FederatedDataIteratorBackingData<ActivityDTO> {

  override function getEntries(startIndex : int, numEntries : int, sortings : List<IteratorBackingDataSorting>) : List<ActivityDTO> {
    return Plugin.findActivities(UserId, Filter, startIndex, numEntries, sortings) as List<ActivityDTO>
  }

  override protected property get EntryCount() : int {
    try {
      return Plugin.getActivityCount(UserId, Filter)
    } catch (ex : DisplayableException) {
      _logger.error("Could not get entry count.", ex)
    }
    return 0
  }

}