package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVPhysicalRecoveryTherapyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVPhysicalRecoveryTherapyCov extends entity.TRVCoverCov {
  protected TRVPhysicalRecoveryTherapyCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVPhysicalRecoveryTherapyCov(entity.PolicyPeriod branch)  {
    super(branch, "z9uhks0e2cd4ecokk0al91pqoh9");
  }
  
  public TRVPhysicalRecoveryTherapyCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z9uhks0e2cd4ecokk0al91pqoh9");
  }
  
  public boolean getHasPhysicalRecoveryTherapyTerm() {
    return hasCovTerm("zjaju3r8hko4j2d9ne4ebcs2poa");
  }
  
  public productmodel.GenericPhysicalRecoveryTherapyType getPhysicalRecoveryTherapyTerm() {
    return (productmodel.GenericPhysicalRecoveryTherapyType)getCovTerm("zjaju3r8hko4j2d9ne4ebcs2poa");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVPhysicalRecoveryTherapyCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVPhysicalRecoveryTherapyCov>() {
      public productmodel.TRVPhysicalRecoveryTherapyCov newEmptyInstance() {
        return new productmodel.TRVPhysicalRecoveryTherapyCov();
      }
      
      
    });
  }
}