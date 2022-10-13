package gw.api.web.desktop.data.filter

uses gw.api.filters.IFilter
uses gw.plugin.federateddata.IFederatedDataFilter

@Export
class FederatedDataFilter implements IFederatedDataFilter, IFilter {

  var _label : String as readonly Label
  var _code : String as readonly Code

  construct(label : String, code : String) {
      _label = label
      _code = code
  }

  override function toString() : String {
      return _label
  }
}