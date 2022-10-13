package gw.api.web.desktop.data.submission

uses com.fasterxml.jackson.annotation.JsonFormat
uses com.fasterxml.jackson.core.type.TypeReference
uses entity.Job
uses gw.api.web.desktop.data.DesktopDTOSerializationHelper
uses gw.api.web.desktop.data.DesktopDataDTO
uses gw.api.web.desktop.data.common.MonetaryAmountDTO
uses gw.plugin.federateddata.FederatedDataConstants
uses gw.riskassessment.JacksonEnabledSerializable

@Export
class SubmissionDTO implements DesktopDataDTO, JacksonEnabledSerializable {

  var _publicId : String as PublicId
  var _primaryInsuredName : String as PrimaryInsuredName

  @JsonFormat(:shape = JsonFormat.Shape.STRING, :pattern = FederatedDataConstants.API_DATE_TIME_PATERN)
  var _editEffectiveDate : Date as EditEffectiveDate

  @JsonFormat(:shape = JsonFormat.Shape.STRING, :pattern = FederatedDataConstants.API_DATE_TIME_PATERN)
  var _dateQuoteNeeded : Date as DateQuoteNeeded

  var _jobNumber : String as JobNumber
  var _displayType : String as DisplayType
  var _displayStatus : String as DisplayStatus
  var _policyIssued : boolean as PolicyIssued
  var _policyProduct : String as PolicyProduct
  var _policyProductCode : String as PolicyProductCode
  var _producer : String as Producer
  var _underwriter : String as Underwriter
  var _policyNumber : String as PolicyNumber
  var _totalPremiumRPT : MonetaryAmountDTO as TotalPremiumRPT
  var _estimatedPremium : MonetaryAmountDTO as EstimatedPremium
  var _status : String as Status
  var _viewable : boolean as Viewable

  var _accountPublicId : String as AccountPublicId
  var _policyPublicId : String as PolicyPublicId

  private construct() {
  }

  private static function fromJob(job : Job) : SubmissionDTO {
    return new SubmissionDTO() {
      :_publicId = job.PublicID,
      :_primaryInsuredName = job.PrimaryInsuredName,
      :_editEffectiveDate = job.SelectedVersion.EditEffectiveDate,
      :_dateQuoteNeeded = job.DateQuoteNeeded,
      :_jobNumber = job.JobNumber,
      :_displayType = job.DisplayType,
      :_displayStatus = job.DisplayStatus,
      :_policyIssued = job.Policy.Issued,
      :_policyProduct = job.Policy.Product.DisplayName,
      :_policyProductCode = job.Policy.ProductCode,
      :_producer = job.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser.DisplayName,
      :_underwriter = job.getUserRoleAssignmentByRole(TC_UNDERWRITER).AssignedUser.DisplayName,
      :_policyNumber = job.PolicyNumberOrJobNumber,
      :_totalPremiumRPT = MonetaryAmountDTO.from(job.SelectedVersion.TotalPremiumRPT),
      :_estimatedPremium = MonetaryAmountDTO.from(job.SelectedVersion.EstimatedPremium),
      :_status = job.SelectedVersion.Status.Code,
      :_viewable = job.Viewable,
      :_accountPublicId = job.Policy.Account.PublicID,
      :_policyPublicId = job.Policy.PublicID
    }
  }

  static function from(submission : Submission) : SubmissionDTO {
    return fromJob(submission)
  }

  static function from(issuance : Issuance) : SubmissionDTO {
    return fromJob(issuance)
  }

  static function from(json : String) : SubmissionDTO {
    return DesktopDTOSerializationHelper.Mapper.readValue(json, SubmissionDTO)
  }

  static function fromCollection(jsonCollection : String) : List<SubmissionDTO> {
    return DesktopDTOSerializationHelper.Mapper.readValue(jsonCollection, new TypeReference<List<SubmissionDTO>>() {
    })
  }

  function writeAsJSONString() : String {
    return DesktopDTOSerializationHelper.Mapper.writeValueAsString(this)
  }
}