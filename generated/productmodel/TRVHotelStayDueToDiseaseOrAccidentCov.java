package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVHotelStayDueToDiseaseOrAccidentCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVHotelStayDueToDiseaseOrAccidentCov extends entity.TRVCoverCov {
  protected TRVHotelStayDueToDiseaseOrAccidentCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVHotelStayDueToDiseaseOrAccidentCov(entity.PolicyPeriod branch)  {
    super(branch, "z3rj84g9fkuv947qgoqvo3ku7qa");
  }
  
  public TRVHotelStayDueToDiseaseOrAccidentCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z3rj84g9fkuv947qgoqvo3ku7qa");
  }
  
  public boolean getHasHotelStayDueToDiseaseOrAccidentLimTerm() {
    return hasCovTerm("zilh87o7t6sopadj02panam1nj8");
  }
  
  public productmodel.OptionHotelStayDueToDiseaseOrAccidentLimType getHotelStayDueToDiseaseOrAccidentLimTerm() {
    return (productmodel.OptionHotelStayDueToDiseaseOrAccidentLimType)getCovTerm("zilh87o7t6sopadj02panam1nj8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVHotelStayDueToDiseaseOrAccidentCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVHotelStayDueToDiseaseOrAccidentCov>() {
      public productmodel.TRVHotelStayDueToDiseaseOrAccidentCov newEmptyInstance() {
        return new productmodel.TRVHotelStayDueToDiseaseOrAccidentCov();
      }
      
      
    });
  }
}