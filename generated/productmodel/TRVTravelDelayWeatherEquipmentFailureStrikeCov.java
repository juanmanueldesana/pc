package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTravelDelayWeatherEquipmentFailureStrikeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVTravelDelayWeatherEquipmentFailureStrikeCov extends entity.TRVCoverCov {
  protected TRVTravelDelayWeatherEquipmentFailureStrikeCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVTravelDelayWeatherEquipmentFailureStrikeCov(entity.PolicyPeriod branch)  {
    super(branch, "z8di8itm878g27b9t89vfolc8va");
  }
  
  public TRVTravelDelayWeatherEquipmentFailureStrikeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z8di8itm878g27b9t89vfolc8va");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVTravelDelayWeatherEquipmentFailureStrikeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVTravelDelayWeatherEquipmentFailureStrikeCov>() {
      public productmodel.TRVTravelDelayWeatherEquipmentFailureStrikeCov newEmptyInstance() {
        return new productmodel.TRVTravelDelayWeatherEquipmentFailureStrikeCov();
      }
      
      
    });
  }
}