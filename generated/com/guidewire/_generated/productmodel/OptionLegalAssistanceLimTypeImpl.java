package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVLegalAssistanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionLegalAssistanceLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionLegalAssistanceLimType> implements productmodel.OptionLegalAssistanceLimType {
  public OptionLegalAssistanceLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVLegalAssistanceCov getCoverage() {
    return (productmodel.TRVLegalAssistanceCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVLegalAssistanceCov getTRVLegalAssistanceCov() {
    return (productmodel.TRVLegalAssistanceCov)getClause();
  }
  
  
}