package gw.plugin.resolver.dto

uses gw.integration.document.production.json.JSONSerializable

@Export
class ResolverPolicyPeriodData extends JSONSerializable {
  public var policyPublicId : String
  public var policyNumberData : ResolverPolicyNumberData

  static class ResolverPolicyNumberData extends JSONSerializable {
    public var policyNumber : String
  }
}