package gw.plugin.federateddata

@Export
class FederatedDataResponse {
  var _statusCode : int as readonly StatusCode
  var _statusMessage : String as readonly StatusMessage
  var _entitiesData : String as readonly EntitiesData

  construct(statusCode : int, statusMessage : String) {
    this._statusCode = statusCode
    this._statusMessage = statusMessage
  }

  construct(statusCode : int, statusMessage : String, entitiesData : String) {
    this._statusCode = statusCode
    this._statusMessage = statusMessage
    this._entitiesData = entitiesData
  }
}