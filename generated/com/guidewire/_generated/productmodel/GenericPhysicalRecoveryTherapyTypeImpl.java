package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVPhysicalRecoveryTherapyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPhysicalRecoveryTherapyTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPhysicalRecoveryTherapyType {
  public GenericPhysicalRecoveryTherapyTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVPhysicalRecoveryTherapyCov getCoverage() {
    return (productmodel.TRVPhysicalRecoveryTherapyCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVPhysicalRecoveryTherapyCov getTRVPhysicalRecoveryTherapyCov() {
    return (productmodel.TRVPhysicalRecoveryTherapyCov)getClause();
  }
  
  
}