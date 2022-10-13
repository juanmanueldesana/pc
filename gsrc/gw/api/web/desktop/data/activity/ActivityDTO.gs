package gw.api.web.desktop.data.activity

uses com.fasterxml.jackson.annotation.JsonFormat
uses com.fasterxml.jackson.annotation.JsonIgnore
uses com.fasterxml.jackson.core.type.TypeReference
uses entity.Activity
uses gw.api.web.color.GWColor
uses gw.api.web.desktop.data.DesktopDTOSerializationHelper
uses gw.api.web.desktop.data.DesktopDataDTO
uses gw.plugin.federateddata.FederatedDataConstants
uses gw.riskassessment.JacksonEnabledSerializable

@Export
class ActivityDTO implements DesktopDataDTO, JacksonEnabledSerializable {

  var _publicId : String as PublicId

  @JsonFormat(:shape = JsonFormat.Shape.STRING, :pattern = FederatedDataConstants.API_DATE_TIME_PATERN)
  var _targetDate : Date as TargetDate

  var _subject : String as Subject
  var _priority : String as Priority
  var _status : String as Status
  var _accountHolderContact : String as AccountHolderContact

  @JsonFormat(:shape = JsonFormat.Shape.STRING, :pattern = FederatedDataConstants.API_DATE_TIME_PATERN)
  var _escalationDate : Date as EscalationDate

  var _product : String as Product
  var _updatedSinceLastViewed : boolean as UpdatedSinceLastViewed
  var _overdue : boolean as Overdue
  var _policyNumberOrJobNumber : String as PolicyNumberOrJobNumber
  var _policyAccountHolderContact : String as PolicyAccountHolderContact
  var _policyProduct : String as PolicyProduct
  var _policyProductCode : String as PolicyProductCode
  var _assignedByUser : String as AssignedByUser
  var _state : String as State
  var _policyState : String as PolicyState
  var _escalated : boolean as Escalated
  var _searchResultID : String as SearchResultID
  var _isArchived : boolean as IsArchived

  var _accountPublicId : String as AccountPublicId
  var _policyPublicId : String as PolicyPublicId
  var _jobPublicId : String as JobPublicId

  private construct() {
  }

  static function from(activity : Activity) : ActivityDTO {
    return new ActivityDTO() {
      :_publicId = activity.PublicID,
      :_targetDate = activity.TargetDate,
      :_subject = activity.Subject,
      :_priority = activity.Priority.Code,
      :_status = activity.Status.Code,
      :_accountHolderContact = activity.Account.AccountHolderContact.DisplayName,
      :_state = activity.Account.AccountHolderContact.PrimaryAddress.State.Code,
      :_escalationDate = activity.EscalationDate,
      :_product = activity.Policy.Product.DisplayName,
      :_updatedSinceLastViewed = activity.UpdatedSinceLastViewed,
      :_overdue = activity.Overdue,
      :_policyNumberOrJobNumber = activity.Job.PolicyNumberOrJobNumber,
      :_policyAccountHolderContact = activity.Job.Policy.Account.AccountHolderContact.DisplayName,
      :_policyProduct = activity.Job.Policy.Product.DisplayName,
      :_policyProductCode = activity.Job.Policy.ProductCode,
      :_assignedByUser = activity.AssignedByUser.DisplayName,
      :_policyState = activity.Job.Policy.Account.AccountHolderContact.PrimaryAddress.State.Code,
      :_escalated = activity.Escalated,
      :_searchResultID = activity.SearchResultID,
      :_isArchived = activity.associatedItemIsArchived(),
      :_accountPublicId = activity.Account.PublicID,
      :_policyPublicId = activity.Policy.PublicID,
      :_jobPublicId = activity.Job.PublicID
    }
  }

  static function from(json : String) : ActivityDTO {
    return DesktopDTOSerializationHelper.Mapper.readValue(json, ActivityDTO)
  }

  static function fromCollection(jsonCollection : String) : List<ActivityDTO> {
    return DesktopDTOSerializationHelper.Mapper.readValue(jsonCollection, new TypeReference<List<ActivityDTO>>() {
    })
  }

  function writeAsJSONString() : String {
    return DesktopDTOSerializationHelper.Mapper.writeValueAsString(this)
  }

  @JsonIgnore
      property get UIDisplayName() : String {
    var displayName = _policyAccountHolderContact
    return displayName == null
        ? _accountHolderContact
        : displayName
  }

  @JsonIgnore
      property get UIDisplayState() : State {
    var displayState = _policyState
    return typekey.State.get(displayState == null
        ? _state
        : displayState)
  }

  @JsonIgnore
      property get UIPriorityColor() : GWColor {
    if (typekey.Priority.get(this.Priority) == typekey.Priority.TC_URGENT) {
      return GWColor.THEME_IMPORTANCE_CRITICAL
    } else if (typekey.Priority.get(this.Priority) == typekey.Priority.TC_HIGH) {
      return GWColor.THEME_IMPORTANCE_HIGH
    }
    return null
  }

  @JsonIgnore
      property get UIOverdueColor() : GWColor {
    return this.Overdue ? GWColor.THEME_PROGRESS_OVERDUE : null
  }
}