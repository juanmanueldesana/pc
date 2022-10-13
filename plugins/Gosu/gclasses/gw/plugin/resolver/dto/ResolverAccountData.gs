package gw.plugin.resolver.dto

uses gw.api.system.PLConfigParameters
uses gw.integration.document.production.json.JSONSerializable

@Export
class ResolverAccountData extends JSONSerializable {

  public var accountPublicId : String
  public var accountNumber : String
  public var clusterId : String

  construct() {
    clusterId = PLConfigParameters.ShardId.Value
  }
}