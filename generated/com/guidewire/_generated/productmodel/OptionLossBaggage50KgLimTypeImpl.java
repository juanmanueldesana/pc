package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVLossBaggage50kg.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionLossBaggage50KgLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionLossBaggage50KgLimType> implements productmodel.OptionLossBaggage50KgLimType {
  public OptionLossBaggage50KgLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVLossBaggage50kg getCoverage() {
    return (productmodel.TRVLossBaggage50kg)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVLossBaggage50kg getTRVLossBaggage50kg() {
    return (productmodel.TRVLossBaggage50kg)getClause();
  }
  
  
}