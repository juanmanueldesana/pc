package gw.api.web.desktop.data.common

uses gw.api.web.desktop.data.DesktopDataDTO
uses gw.pl.currency.MonetaryAmount
uses gw.riskassessment.JacksonEnabledSerializable

uses java.math.BigDecimal

@Export
class MonetaryAmountDTO implements DesktopDataDTO, JacksonEnabledSerializable {
  var _amount : BigDecimal as Amount
  var _currency : String as Currency

  static function from(monetaryAmount : MonetaryAmount) : MonetaryAmountDTO {
    return monetaryAmount == null ? null : new MonetaryAmountDTO() {
      :_amount = monetaryAmount.Amount,
      :_currency = monetaryAmount.Currency.Code
    }
  }

  function to() : MonetaryAmount {
    return new MonetaryAmount(_amount, typekey.Currency.get(_currency))
  }
}