package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVPaymentOfBondsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPaymentOfBondsLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPaymentOfBondsLimType> implements productmodel.OptionPaymentOfBondsLimType {
  public OptionPaymentOfBondsLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVPaymentOfBondsCov getCoverage() {
    return (productmodel.TRVPaymentOfBondsCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVPaymentOfBondsCov getTRVPaymentOfBondsCov() {
    return (productmodel.TRVPaymentOfBondsCov)getClause();
  }
  
  
}