package gw.plugin.federateddata.v1

uses gw.api.iterator.IteratorBackingDataSorting
uses gw.api.util.DisplayableException
uses gw.api.web.desktop.data.DesktopDataDTO
uses gw.api.web.desktop.data.account.AccountDTO
uses gw.api.web.desktop.data.activity.ActivityDTO
uses gw.api.web.desktop.data.common.SummaryCountsDTO
uses gw.api.web.desktop.data.submission.SubmissionDTO
uses gw.plugin.federateddata.FederatedDataPageParams
uses gw.plugin.federateddata.FederatedDataResponse
uses gw.plugin.federateddata.IFederatedDataFilter
uses gw.plugin.federateddata.IFederatedDataPlugin
uses org.apache.http.HttpStatus
uses org.apache.http.client.HttpResponseException

uses FederatedDataServiceClient#*

@Export
public class FederatedDataPlugin implements IFederatedDataPlugin {

  public static final var DEST_ID : int = 322

  private static final var PARAM_HOST = "HostUrl"

  internal var serviceClient : FederatedDataServiceClient

  property get Enabled() : boolean {
    return true
  }

  function createAccount(userId : String, data : String) {
    checkResponseStatus(serviceClient.createEntity(ACCOUNT_CONTROLLER, userId, data))
  }

  function updateAccount(userId : String, accountId : String, data : String) {
    checkResponseStatus(serviceClient.updateEntity(ACCOUNT_CONTROLLER, userId, accountId, data))
  }

  function deleteAccount(userId : String, accountId : String) {
    checkResponseStatus(serviceClient.deleteEntity(ACCOUNT_CONTROLLER, userId, accountId))
  }

  function createActivity(userId : String, data : String) {
    checkResponseStatus(serviceClient.createEntity(ACTIVITY_CONTROLLER, userId, data))
  }

  function updateActivity(userId : String, activityId : String, data : String) {
    checkResponseStatus(serviceClient.updateEntity(ACTIVITY_CONTROLLER, userId, activityId, data))
  }

  function deleteActivity(userId : String, activityId : String) {
    checkResponseStatus(serviceClient.deleteEntity(ACTIVITY_CONTROLLER, userId, activityId))
  }

  function createSubmission(userId : String, data : String) {
    checkResponseStatus(serviceClient.createEntity(SUBMISSION_CONTROLLER, userId, data))
  }

  function updateSubmission(userId : String, submissionId : String, data : String) {
    checkResponseStatus(serviceClient.updateEntity(SUBMISSION_CONTROLLER, userId, submissionId, data))
  }

  function deleteSubmission(userId : String, submissionId : String) {
    checkResponseStatus(serviceClient.deleteEntity(SUBMISSION_CONTROLLER, userId, submissionId))
  }

  override property set Parameters(params : Map<Object, Object>) {
    serviceClient = new FederatedDataServiceClient(params.get(PARAM_HOST) as String)
  }

  override function findActivities(userId : String, filter : IFederatedDataFilter, startIndex : int, numEntries : int,
                                   sorting : List<IteratorBackingDataSorting>) : List<DesktopDataDTO> {
    var response = serviceClient.getEntities(ACTIVITY_CONTROLLER, userId, filter.getCode(), new FederatedDataPageParams(startIndex, numEntries, sorting))
    checkGetResponseStatus(response)
    return ActivityDTO.fromCollection(response.EntitiesData)
  }

  override function findAccounts(userId : String, filter : IFederatedDataFilter, startIndex : int, numEntries : int,
                                 sorting : List<IteratorBackingDataSorting>) : List<DesktopDataDTO> {
    var response = serviceClient.getEntities(ACCOUNT_CONTROLLER, userId, filter.getCode(), new FederatedDataPageParams(startIndex, numEntries, sorting))
    checkGetResponseStatus(response)
    return AccountDTO.fromCollection(response.EntitiesData)
  }

  override function findSubmissions(userId : String, filter : IFederatedDataFilter, startIndex : int, numEntries : int,
                                    sorting : List<IteratorBackingDataSorting>) : List<DesktopDataDTO> {
    var response = serviceClient.getEntities(SUBMISSION_CONTROLLER, userId, filter.getCode(), new FederatedDataPageParams(startIndex, numEntries, sorting))
    checkGetResponseStatus(response)
    return SubmissionDTO.fromCollection(response.EntitiesData)
  }

  override function getActivityCount(userId : String, filter : IFederatedDataFilter) : int {
    var response = serviceClient.getCount(ACTIVITY_CONTROLLER, userId, filter.getCode())
    checkGetResponseStatus(response)
    return Integer.valueOf(response.EntitiesData)
  }

  override function getSubmissionCount(userId : String, filter : IFederatedDataFilter) : int {
    var response = serviceClient.getCount(SUBMISSION_CONTROLLER, userId, filter.getCode())
    checkGetResponseStatus(response)
    return Integer.valueOf(response.EntitiesData)
  }

  override function getAccountCount(userId : String, filter : IFederatedDataFilter) : int {
    var response = serviceClient.getCount(ACCOUNT_CONTROLLER, userId, filter.getCode())
    checkGetResponseStatus(response)
    return Integer.valueOf(response.EntitiesData)
  }

  override function getUserSummaryCounts(userId : String) : DesktopDataDTO {
    var response = serviceClient.getStats(userId, Date.Today)
    checkGetResponseStatus(response)
    return SummaryCountsDTO.from(response.EntitiesData)
  }

  private function checkResponseStatus(response : FederatedDataResponse) {
    if (response.StatusCode < HttpStatus.SC_OK || response.StatusCode >= HttpStatus.SC_BAD_REQUEST) {
      throw new HttpResponseException(response.StatusCode, response.StatusMessage)
    }
  }

  private function checkGetResponseStatus(response : FederatedDataResponse) {
    if (response.StatusCode < HttpStatus.SC_OK || response.StatusCode >= HttpStatus.SC_BAD_REQUEST) {
      var message = "FederatedData service issue. StatusCode: ${response.StatusCode} Message: ${response.StatusMessage}"
      throw new DisplayableException(message)
    }
  }
}