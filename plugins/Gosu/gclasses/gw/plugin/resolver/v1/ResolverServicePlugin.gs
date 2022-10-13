package gw.plugin.resolver.v1

uses gw.plugin.resolver.IResolverServicePlugin
uses gw.plugin.resolver.ResolverResponse
uses org.apache.http.HttpStatus
uses org.apache.http.client.HttpResponseException

@Export
public class ResolverServicePlugin implements IResolverServicePlugin {

  private static final var PARAM_API_KEY_VALUE = "ApiKey"
  private static final var PARAM_HOST_URL = "HostUrl"

  internal var resolverClient : ResolverClient

  override property set Parameters(params : Map<Object, Object>) {
    resolverClient = new ResolverClient(params.get(PARAM_API_KEY_VALUE) as String, params.get(PARAM_HOST_URL) as String)
  }

  override function addPolicy(data : String) {
    checkResponseStatus(resolverClient.addPolicy(data))
  }

  override function addAccount(data : String) {
    checkResponseStatus(resolverClient.addAccount(data))
  }

  override function addPolicyPeriod(data : String) {
    checkResponseStatus(resolverClient.addPolicyPeriod(data))
  }

  override function getClusterForAccount(accountId : String) : String {
    var resolverResponse = resolverClient.getClusterForAccount(accountId)
    checkResponseStatus(resolverResponse)
    return resolverResponse.Value
  }

  override function getClusterForPolicy(policyId : String) : String {
    var resolverResponse = resolverClient.getClusterForPolicy(policyId)
    checkResponseStatus(resolverResponse)
    return resolverResponse.Value
  }

  private function checkResponseStatus(response : ResolverResponse) {
    if (response.StatusCode < HttpStatus.SC_OK || response.StatusCode >= HttpStatus.SC_BAD_REQUEST) {
      throw new HttpResponseException(response.StatusCode, response.StatusMessage)
    }
  }
}