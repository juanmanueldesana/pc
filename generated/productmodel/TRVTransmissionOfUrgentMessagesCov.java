package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTransmissionOfUrgentMessagesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVTransmissionOfUrgentMessagesCov extends entity.TRVCoverCov {
  protected TRVTransmissionOfUrgentMessagesCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVTransmissionOfUrgentMessagesCov(entity.PolicyPeriod branch)  {
    super(branch, "zr2igqknckboe6575em02844ha9");
  }
  
  public TRVTransmissionOfUrgentMessagesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zr2igqknckboe6575em02844ha9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVTransmissionOfUrgentMessagesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVTransmissionOfUrgentMessagesCov>() {
      public productmodel.TRVTransmissionOfUrgentMessagesCov newEmptyInstance() {
        return new productmodel.TRVTransmissionOfUrgentMessagesCov();
      }
      
      
    });
  }
}