package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTripCancellationAccidentDeathOrDiseaseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionTripCancellationAccidentDeathOrDiseaseLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionTripCancellationAccidentDeathOrDiseaseLimType> implements productmodel.OptionTripCancellationAccidentDeathOrDiseaseLimType {
  public OptionTripCancellationAccidentDeathOrDiseaseLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov getCoverage() {
    return (productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov getTRVTripCancellationAccidentDeathOrDiseaseCov() {
    return (productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov)getClause();
  }
  
  
}