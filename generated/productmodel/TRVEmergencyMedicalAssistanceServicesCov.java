package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVEmergencyMedicalAssistanceServicesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVEmergencyMedicalAssistanceServicesCov extends entity.TRVCoverCov {
  protected TRVEmergencyMedicalAssistanceServicesCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVEmergencyMedicalAssistanceServicesCov(entity.PolicyPeriod branch)  {
    super(branch, "zn5g25h6e5d7p1e73ufb4l6hcr8");
  }
  
  public TRVEmergencyMedicalAssistanceServicesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zn5g25h6e5d7p1e73ufb4l6hcr8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVEmergencyMedicalAssistanceServicesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVEmergencyMedicalAssistanceServicesCov>() {
      public productmodel.TRVEmergencyMedicalAssistanceServicesCov newEmptyInstance() {
        return new productmodel.TRVEmergencyMedicalAssistanceServicesCov();
      }
      
      
    });
  }
}