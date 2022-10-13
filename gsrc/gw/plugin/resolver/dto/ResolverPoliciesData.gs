package gw.plugin.resolver.dto

uses gw.api.system.PLConfigParameters
uses gw.integration.document.production.json.JSONSerializable

@Export
class ResolverPoliciesData extends JSONSerializable {

  public var policies : List<ResolverPolicyData>
  public var clusterId : String

  construct() {
    policies = {}
    clusterId = PLConfigParameters.ShardId.Value
  }

  static class ResolverPolicyData extends JSONSerializable {
    public var policyPublicId : String
    public var policyNumbers : List<String>

    construct() {
      policyNumbers = {}
    }
  }
}