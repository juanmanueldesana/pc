package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVEmergencyDentalCareExpensesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionEmergencyDentalCareExpensesLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionEmergencyDentalCareExpensesLimType> implements productmodel.OptionEmergencyDentalCareExpensesLimType {
  public OptionEmergencyDentalCareExpensesLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVEmergencyDentalCareExpensesCov getCoverage() {
    return (productmodel.TRVEmergencyDentalCareExpensesCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVEmergencyDentalCareExpensesCov getTRVEmergencyDentalCareExpensesCov() {
    return (productmodel.TRVEmergencyDentalCareExpensesCov)getClause();
  }
  
  
}