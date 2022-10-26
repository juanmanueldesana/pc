package gw.lob.trv

uses gw.api.locale.DisplayKey
uses gw.validation.PCValidationContext
uses gw.policy.PolicyLineValidation
uses java.lang.UnsupportedOperationException

@Export
class TRVLineValidation extends PolicyLineValidation<entity.TRVLine> {
  
  property get trvLine(): entity.TRVLine {
    return Line
  }

  construct(valContext: PCValidationContext, polLine: entity.TRVLine) {
    super(valContext, polLine)
  }
  
  override function doValidate() {
    // Add line-specific validation logic here
  }

  /**
   * Validation for Audit is not supported
   */
  override function validateLineForAudit() {
    throw new UnsupportedOperationException(DisplayKey.get("Validator.UnsupportedAuditLineError"))
  }
}