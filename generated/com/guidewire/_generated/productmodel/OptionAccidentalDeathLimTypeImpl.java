package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVAccidentalDeathCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionAccidentalDeathLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionAccidentalDeathLimType> implements productmodel.OptionAccidentalDeathLimType {
  public OptionAccidentalDeathLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVAccidentalDeathCov getCoverage() {
    return (productmodel.TRVAccidentalDeathCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVAccidentalDeathCov getTRVAccidentalDeathCov() {
    return (productmodel.TRVAccidentalDeathCov)getClause();
  }
  
  
}