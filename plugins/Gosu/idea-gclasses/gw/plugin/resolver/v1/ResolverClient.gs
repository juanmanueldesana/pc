package gw.plugin.resolver.v1

uses com.fasterxml.jackson.databind.ObjectMapper
uses gw.plugin.resolver.ResolverResponse
uses gw.plugin.resolver.dto.ResolverPolicyPeriodData
uses org.apache.commons.lang3.StringUtils
uses org.apache.http.client.methods.HttpEntityEnclosingRequestBase
uses org.apache.http.client.methods.HttpGet
uses org.apache.http.client.methods.HttpPost
uses org.apache.http.client.methods.HttpPut
uses org.apache.http.client.methods.HttpRequestBase
uses org.apache.http.client.utils.URIBuilder
uses org.apache.http.entity.StringEntity
uses org.apache.http.impl.client.HttpClients
uses org.apache.http.message.BasicHeader
uses org.apache.http.util.EntityUtils

@Export
class ResolverClient {
  private static final var ACCOUNT_ENDPOINT = "account"
  private static final var POLICY_ENDPOINT = "policy"
  public static final var API_KEY_HEADER : String = "X-API-Key"

  public static final var _objectMapper : ObjectMapper = new ObjectMapper()

  private final var _baseUri : String
  private final var _apiKey : String


  construct(apiKey : String, baseUri : String) {
    _baseUri = generateBaseUrl(baseUri);
    _apiKey = apiKey
  }

  private function generateBaseUrl(baseUri : String) : String {
    return StringUtils.endsWith(baseUri, "/") ? baseUri : baseUri + "/";
  }

  function addAccount(data : String) : ResolverResponse {
    return makePost(data, ACCOUNT_ENDPOINT)
  }

  function addPolicy(data : String) : ResolverResponse {
    return makePost(data, POLICY_ENDPOINT)
  }

  function addPolicyPeriod(data : String) : ResolverResponse {
    var resolverPolicyPeriodData = _objectMapper.readValue(data, ResolverPolicyPeriodData)
    return makePut(resolverPolicyPeriodData.policyNumberData.writeAsJSONString(), "${POLICY_ENDPOINT}/${resolverPolicyPeriodData.policyPublicId}")
  }

  private function makePost(data : String, endpoint : String) : ResolverResponse {
    var resolverURI = new URIBuilder(_baseUri + endpoint).build()
    var httpPost = new HttpPost(resolverURI)
    return makeCallWithApiHeader(data, httpPost)
  }

  private function makePut(data : String, endpoint : String) : ResolverResponse {
    var resolverURI = new URIBuilder(_baseUri + endpoint).build()
    var httpPut = new HttpPut(resolverURI)
    return makeCallWithApiHeader(data, httpPut)
  }

  private function makeCallWithApiHeader(data : String, httpMethod : HttpEntityEnclosingRequestBase) : ResolverResponse {
    var stringEntity = new StringEntity(data)
    httpMethod.addHeader("content-type", "application/json")
    httpMethod.setEntity(stringEntity)

    using (var httpClient = HttpClients.custom().setDefaultHeaders({new BasicHeader(API_KEY_HEADER, _apiKey)}).build(),
           var response = httpClient.execute(httpMethod)) {
      return new ResolverResponse(response.StatusLine.StatusCode, response.StatusLine.ReasonPhrase)
    }
  }

  function getClusterForAccount(accountId : String) : ResolverResponse {
    var resolverURI = new URIBuilder(_baseUri + ACCOUNT_ENDPOINT + "/" + accountId)
        .build()

    var httpGet = new HttpGet(resolverURI)
    return makeGet(httpGet)
  }

  function getClusterForPolicy(policyId : String) : ResolverResponse {
    var resolverURI = new URIBuilder(_baseUri + ACCOUNT_ENDPOINT + "/" + policyId)
        .build()

    var httpGet = new HttpGet(resolverURI)
    return makeGet(httpGet)
  }

  private function makeGet(getMethod : HttpRequestBase) : ResolverResponse {
    using (var httpClient = HttpClients.custom().build(), var response = httpClient.execute(getMethod)) {
      var entity = response.Entity
      if (entity != null) {
        return new ResolverResponse(response.StatusLine.StatusCode, response.StatusLine.ReasonPhrase, EntityUtils.toString(entity))
      }
    }
    throw new RuntimeException("Empty Entity in response.")
  }
}