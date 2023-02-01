package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicinesForHospitalizationCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericMedicinesForHospitalizationGenericTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericMedicinesForHospitalizationGenericType {
  public GenericMedicinesForHospitalizationGenericTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVMedicinesForHospitalizationCov getCoverage() {
    return (productmodel.TRVMedicinesForHospitalizationCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVMedicinesForHospitalizationCov getTRVMedicinesForHospitalizationCov() {
    return (productmodel.TRVMedicinesForHospitalizationCov)getClause();
  }
  
  
}