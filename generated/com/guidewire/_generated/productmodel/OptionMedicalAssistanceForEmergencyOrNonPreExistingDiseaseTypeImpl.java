package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseType> implements productmodel.OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseType {
  public OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease getCoverage() {
    return (productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease getTRVMedicalAssistanceForEmergencyOrNonPreExistingDisease() {
    return (productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease)getClause();
  }
  
  
}