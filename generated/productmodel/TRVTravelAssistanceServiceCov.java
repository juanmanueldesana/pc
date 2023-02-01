package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTravelAssistanceServiceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVTravelAssistanceServiceCov extends entity.TRVCoverCov {
  protected TRVTravelAssistanceServiceCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVTravelAssistanceServiceCov(entity.PolicyPeriod branch)  {
    super(branch, "zjoj07et4kpjk4c5pv4ndtlbvq8");
  }
  
  public TRVTravelAssistanceServiceCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zjoj07et4kpjk4c5pv4ndtlbvq8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVTravelAssistanceServiceCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVTravelAssistanceServiceCov>() {
      public productmodel.TRVTravelAssistanceServiceCov newEmptyInstance() {
        return new productmodel.TRVTravelAssistanceServiceCov();
      }
      
      
    });
  }
}