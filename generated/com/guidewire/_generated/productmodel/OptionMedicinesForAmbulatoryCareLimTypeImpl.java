package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicinesForAmbulatoryCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionMedicinesForAmbulatoryCareLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionMedicinesForAmbulatoryCareLimType> implements productmodel.OptionMedicinesForAmbulatoryCareLimType {
  public OptionMedicinesForAmbulatoryCareLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVMedicinesForAmbulatoryCare getCoverage() {
    return (productmodel.TRVMedicinesForAmbulatoryCare)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVMedicinesForAmbulatoryCare getTRVMedicinesForAmbulatoryCare() {
    return (productmodel.TRVMedicinesForAmbulatoryCare)getClause();
  }
  
  
}