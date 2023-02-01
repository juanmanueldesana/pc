package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVHotelStayDueToDiseaseOrAccidentCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHotelStayDueToDiseaseOrAccidentLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHotelStayDueToDiseaseOrAccidentLimType> implements productmodel.OptionHotelStayDueToDiseaseOrAccidentLimType {
  public OptionHotelStayDueToDiseaseOrAccidentLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.TRVHotelStayDueToDiseaseOrAccidentCov getCoverage() {
    return (productmodel.TRVHotelStayDueToDiseaseOrAccidentCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.TRVHotelStayDueToDiseaseOrAccidentCov getTRVHotelStayDueToDiseaseOrAccidentCov() {
    return (productmodel.TRVHotelStayDueToDiseaseOrAccidentCov)getClause();
  }
  
  
}