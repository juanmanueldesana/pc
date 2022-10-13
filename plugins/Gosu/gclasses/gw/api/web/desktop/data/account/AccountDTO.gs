package gw.api.web.desktop.data.account

uses com.fasterxml.jackson.annotation.JsonFormat
uses com.fasterxml.jackson.core.type.TypeReference
uses gw.api.web.desktop.data.DesktopDTOSerializationHelper
uses gw.api.web.desktop.data.DesktopDataDTO
uses gw.plugin.federateddata.FederatedDataConstants
uses gw.riskassessment.JacksonEnabledSerializable

@Export
class AccountDTO implements DesktopDataDTO, JacksonEnabledSerializable {

  var _publicId : String as PublicId
  var _accountNumber : String as AccountNumber
  var _accountStatus : String as AccountStatus
  var _accountHolderName : String as AccountHolderName
  var _accountHolderAddress : String as AccountHolderAddress

  @JsonFormat(:shape = JsonFormat.Shape.STRING, :pattern = FederatedDataConstants.API_DATE_TIME_PATERN)
  var _creationDate : Date as CreationDate

  private construct() {
  }

  static function from(account : Account) : AccountDTO {
    return new AccountDTO() {
      :_publicId = account.PublicID,
      :_accountNumber = account.AccountNumber,
      :_accountStatus = account.AccountStatus.Code,
      :_accountHolderName = account.AccountHolder.AccountContact.DisplayName,
      :_accountHolderAddress = account.AccountHolderContact.PrimaryAddressDisplayValue,
      :_creationDate = account.CreateTime
    }
  }

  static function from(json : String) : AccountDTO {
    return DesktopDTOSerializationHelper.Mapper.readValue(json, AccountDTO)
  }

  static function fromCollection(jsonCollection : String) : List<AccountDTO> {
    return DesktopDTOSerializationHelper.Mapper.readValue(jsonCollection, new TypeReference<List<AccountDTO>>() {
    })
  }

  function writeAsJSONString() : String {
    return DesktopDTOSerializationHelper.Mapper.writeValueAsString(this)
  }
}