package gw.plugin.federateddata.v1

uses gw.plugin.federateddata.FederatedDataConstants
uses gw.plugin.federateddata.FederatedDataPageParams
uses gw.plugin.federateddata.FederatedDataResponse
uses org.apache.http.client.methods.HttpDelete
uses org.apache.http.client.methods.HttpGet
uses org.apache.http.client.methods.HttpPost
uses org.apache.http.client.methods.HttpPut
uses org.apache.http.client.methods.HttpRequestBase
uses org.apache.http.client.utils.URIBuilder
uses org.apache.http.entity.StringEntity
uses org.apache.http.impl.client.HttpClients
uses org.apache.http.util.EntityUtils

uses java.net.URI
uses java.text.SimpleDateFormat

@Export
class FederatedDataServiceClient {

  public static final var ACTIVITY_CONTROLLER : String = "activity"
  public static final var ACCOUNT_CONTROLLER : String = "account"
  public static final var SUBMISSION_CONTROLLER : String = "submission"
  public static final var USER_CONTROLLER : String = "user"
  public static final var STATS_CONTROLLER : String = "stats"

  public static final var COUNT_ENDPOINT : String = "count"
  public static final var FILTER_PARAM : String = "filter"

  final var _baseUrl : String

  construct(baseUrl : String) {
    _baseUrl = baseUrl
  }

  function createEntity(controller : String, userId : String, data : String) : FederatedDataResponse {
    var uri = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${controller}").build()
    var httpPost = new HttpPost(uri)

    var stringEntity = new StringEntity(data)
    httpPost.addHeader("content-type", "application/json")
    httpPost.setEntity(stringEntity)

    return makeCall(httpPost)
  }

  function updateEntity(controller : String, userId : String, entityId : String, data : String) : FederatedDataResponse {
    var uri = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${controller}/${entityId}").build()
    var httpPut = new HttpPut(uri)

    var stringEntity = new StringEntity(data)
    httpPut.addHeader("content-type", "application/json")
    httpPut.setEntity(stringEntity)

    return makeCall(httpPut)
  }

  function deleteEntity(controller : String, userId : String, entityId : String) : FederatedDataResponse {
    var uri = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${controller}/${entityId}").build()
    var httpDelete = new HttpDelete(uri)
    return makeCall(httpDelete)
  }

  function getEntities(controller : String, userId : String, filterCode : String, pageParams : FederatedDataPageParams) : FederatedDataResponse {
    var uriBuilder = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${controller}")
    if (filterCode != null) {
      uriBuilder.addParameter(FILTER_PARAM, filterCode)
    }
    pageParams.addParamsToUri(uriBuilder)
    var uri = uriBuilder.build()
    return doGet(uri)
  }

  function getCount(controller : String, userId : String, filterCode : String) : FederatedDataResponse {
    var uriBuilder = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${controller}/${COUNT_ENDPOINT}")
    if (filterCode != null) {
      uriBuilder.addParameter(FILTER_PARAM, filterCode)
    }
    var uri = uriBuilder.build()
    return doGet(uri)
  }

  function getStats(userId : String, currentDate : Date) : FederatedDataResponse {
    var uri = new URIBuilder("${_baseUrl}/${USER_CONTROLLER}/${userId}/${STATS_CONTROLLER}")
        .addParameter("currentDate", new SimpleDateFormat(FederatedDataConstants.API_DATE_TIME_PATERN).format(currentDate))
        .build()
    return doGet(uri)
  }

  function doGet(uri : URI) : FederatedDataResponse {
    var httpGet = new HttpGet(uri)

    using (var httpClient = HttpClients.custom()
        .build(), var response = httpClient.execute(httpGet)) {
      var entity = response.Entity
      if (entity != null) {
        return new FederatedDataResponse(response.StatusLine.StatusCode, response.StatusLine.ReasonPhrase, EntityUtils.toString(entity));
      }
    }
    throw new RuntimeException("Empty Entity in response.")
  }

  private function makeCall(httpMethod : HttpRequestBase) : FederatedDataResponse {
    using (var httpClient = HttpClients.custom()
        .build(), var response = httpClient.execute(httpMethod)) {
      return new FederatedDataResponse(response.StatusLine.StatusCode, response.StatusLine.ReasonPhrase);
    }
  }
}