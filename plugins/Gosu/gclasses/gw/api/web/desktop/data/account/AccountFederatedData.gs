package gw.api.web.desktop.data.account

uses gw.api.iterator.IteratorBackingDataSorting
uses gw.api.util.DisplayableException
uses gw.api.web.desktop.data.FederatedDataIteratorBackingData

@Export
class AccountFederatedData extends FederatedDataIteratorBackingData<AccountDTO> {

  override function getEntries(startIndex : int, numEntries : int, sortings : List<IteratorBackingDataSorting>) : List<AccountDTO> {
    return Plugin.findAccounts(UserId, Filter, startIndex, numEntries, sortings) as List<AccountDTO>
  }

  override protected property get EntryCount() : int {
    try {
      return Plugin.getAccountCount(UserId, Filter)
    } catch (ex : DisplayableException) {
      _logger.error("Could not get entry count.", ex)
    }
    return 0
  }
}