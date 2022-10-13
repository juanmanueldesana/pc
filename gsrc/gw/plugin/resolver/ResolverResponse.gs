package gw.plugin.resolver

@Export
class ResolverResponse {
  var _statusCode : int as readonly StatusCode
  var _statusMessage : String as readonly StatusMessage
  var _value : String as readonly Value

  construct(statusCode : int, statusLine : String) {
    this._statusCode = statusCode
    this._statusMessage = statusLine
  }

  construct(statusCode : int, statusLine : String, value : String) {
    this._statusCode = statusCode
    this._statusMessage = statusLine
    this._value = value
  }
}