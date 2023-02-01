package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTripCancellationAccidentDeathOrDiseaseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVTripCancellationAccidentDeathOrDiseaseCov extends entity.TRVCoverCov {
  protected TRVTripCancellationAccidentDeathOrDiseaseCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVTripCancellationAccidentDeathOrDiseaseCov(entity.PolicyPeriod branch)  {
    super(branch, "zt5j4gek7l77a0ntc9klm42j1e8");
  }
  
  public TRVTripCancellationAccidentDeathOrDiseaseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zt5j4gek7l77a0ntc9klm42j1e8");
  }
  
  public boolean getHasTripCancellationAccidentDeathOrDiseaseLimTerm() {
    return hasCovTerm("zs9jkndt2tiqu66voj027rdibo9");
  }
  
  public productmodel.OptionTripCancellationAccidentDeathOrDiseaseLimType getTripCancellationAccidentDeathOrDiseaseLimTerm() {
    return (productmodel.OptionTripCancellationAccidentDeathOrDiseaseLimType)getCovTerm("zs9jkndt2tiqu66voj027rdibo9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVTripCancellationAccidentDeathOrDiseaseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov>() {
      public productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov newEmptyInstance() {
        return new productmodel.TRVTripCancellationAccidentDeathOrDiseaseCov();
      }
      
      
    });
  }
}