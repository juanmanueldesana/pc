package gw.api.web.desktop.data

uses gw.api.iterator.IteratorBackingData
uses gw.api.iterator.IteratorSumResult
uses gw.api.system.PCLoggerCategory
uses gw.api.web.desktop.data.filter.FederatedDataFilter
uses gw.plugin.Plugins
uses gw.plugin.federateddata.IFederatedDataPlugin
uses org.slf4j.Logger

@Export
abstract class FederatedDataIteratorBackingData<T extends DesktopDataDTO> implements IteratorBackingData<T, FederatedDataFilter> {

  var _filter : FederatedDataFilter
  var _totalNumber : Integer
  protected var _logger : Logger = PCLoggerCategory.FEDERATED_DATA_PLUGIN

  protected abstract property get EntryCount() : int

  override property get FilterType() : Class<FederatedDataFilter> {
    return FederatedDataFilter
  }

  override function applyFilters(filters : List<FederatedDataFilter>) {
    _filter = filters.single()
    _totalNumber = null
  }

  override function resetFilters() {
    _filter = null
  }

  override property get NumEntries() : int {
    if (_totalNumber == null) {
      _totalNumber = EntryCount
    }
    return _totalNumber
  }

  override function calcSum(expression : String) : IteratorSumResult {
    return null
  }

  protected property get Plugin() : IFederatedDataPlugin {
    return Plugins.get(IFederatedDataPlugin)
  }

  protected property get Filter() : FederatedDataFilter {
    return _filter
  }

  protected property get UserId() : String {
    return User.util.CurrentUser.PublicID
  }
}