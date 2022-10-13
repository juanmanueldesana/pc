package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipRentedEquipment.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionContractorsEquipRentedEquipmentDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionContractorsEquipRentedEquipmentDeductibleType> implements productmodel.OptionContractorsEquipRentedEquipmentDeductibleType {
  public OptionContractorsEquipRentedEquipmentDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentedEquipment getContractorsEquipRentedEquipment() {
    return (productmodel.ContractorsEquipRentedEquipment)getClause();
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentedEquipment getCoverage() {
    return (productmodel.ContractorsEquipRentedEquipment)getClause();
  }
  
  
}