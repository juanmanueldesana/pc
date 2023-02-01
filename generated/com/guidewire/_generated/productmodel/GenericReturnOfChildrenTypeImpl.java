package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVReturnOfChildrenCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericReturnOfChildrenTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericReturnOfChildrenType {
  public GenericReturnOfChildrenTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVReturnOfChildrenCov getCoverage() {
    return (productmodel.TRVReturnOfChildrenCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVReturnOfChildrenCov getTRVReturnOfChildrenCov() {
    return (productmodel.TRVReturnOfChildrenCov)getClause();
  }
  
  
}