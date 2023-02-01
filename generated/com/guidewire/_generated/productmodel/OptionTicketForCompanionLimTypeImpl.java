package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVCompanionInCaseOfHospitalizationCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionTicketForCompanionLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionTicketForCompanionLimType> implements productmodel.OptionTicketForCompanionLimType {
  public OptionTicketForCompanionLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVCompanionInCaseOfHospitalizationCov getCoverage() {
    return (productmodel.TRVCompanionInCaseOfHospitalizationCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVCompanionInCaseOfHospitalizationCov getTRVCompanionInCaseOfHospitalizationCov() {
    return (productmodel.TRVCompanionInCaseOfHospitalizationCov)getClause();
  }
  
  
}