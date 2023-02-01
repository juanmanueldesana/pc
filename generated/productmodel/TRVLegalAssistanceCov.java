package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVLegalAssistanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVLegalAssistanceCov extends entity.TRVCoverCov {
  protected TRVLegalAssistanceCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVLegalAssistanceCov(entity.PolicyPeriod branch)  {
    super(branch, "ziuhaorvcqu9kc6i8e714rholr9");
  }
  
  public TRVLegalAssistanceCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ziuhaorvcqu9kc6i8e714rholr9");
  }
  
  public boolean getHasLegalAssistanceLimTerm() {
    return hasCovTerm("z0hgiufcl62cb11ln67er42ilva");
  }
  
  public productmodel.OptionLegalAssistanceLimType getLegalAssistanceLimTerm() {
    return (productmodel.OptionLegalAssistanceLimType)getCovTerm("z0hgiufcl62cb11ln67er42ilva");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVLegalAssistanceCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVLegalAssistanceCov>() {
      public productmodel.TRVLegalAssistanceCov newEmptyInstance() {
        return new productmodel.TRVLegalAssistanceCov();
      }
      
      
    });
  }
}