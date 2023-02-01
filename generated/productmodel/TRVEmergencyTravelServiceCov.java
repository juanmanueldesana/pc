package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVEmergencyTravelServiceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVEmergencyTravelServiceCov extends entity.TRVCoverCov {
  protected TRVEmergencyTravelServiceCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVEmergencyTravelServiceCov(entity.PolicyPeriod branch)  {
    super(branch, "zjjhkakqckb5q16u1gt1gjvt8gb");
  }
  
  public TRVEmergencyTravelServiceCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zjjhkakqckb5q16u1gt1gjvt8gb");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVEmergencyTravelServiceCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVEmergencyTravelServiceCov>() {
      public productmodel.TRVEmergencyTravelServiceCov newEmptyInstance() {
        return new productmodel.TRVEmergencyTravelServiceCov();
      }
      
      
    });
  }
}