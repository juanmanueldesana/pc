package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVFirstMedicalAttentionForPreExistingDiseaseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVFirstMedicalAttentionForPreExistingDiseaseCov extends entity.TRVCoverCov {
  protected TRVFirstMedicalAttentionForPreExistingDiseaseCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVFirstMedicalAttentionForPreExistingDiseaseCov(entity.PolicyPeriod branch)  {
    super(branch, "zuvi8ddetfna91ghiddntrivkk8");
  }
  
  public TRVFirstMedicalAttentionForPreExistingDiseaseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zuvi8ddetfna91ghiddntrivkk8");
  }
  
  public productmodel.OptionFirstMedicalAttentionForPreExistingDiseaseLimType getFirstMedicalAttentionForPreExistingDiseaseLimTerm() {
    return (productmodel.OptionFirstMedicalAttentionForPreExistingDiseaseLimType)getCovTerm("z7ngcv0ms65pl254mnllolmpq5a");
  }
  
  public boolean getHasFirstMedicalAttentionForPreExistingDiseaseLimTerm() {
    return hasCovTerm("z7ngcv0ms65pl254mnllolmpq5a");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVFirstMedicalAttentionForPreExistingDiseaseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVFirstMedicalAttentionForPreExistingDiseaseCov>() {
      public productmodel.TRVFirstMedicalAttentionForPreExistingDiseaseCov newEmptyInstance() {
        return new productmodel.TRVFirstMedicalAttentionForPreExistingDiseaseCov();
      }
      
      
    });
  }
}