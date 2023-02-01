package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease extends entity.TRVCoverCov {
  protected TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease()  {
    super((java.lang.Void)null);
  }
  
  public TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease(entity.PolicyPeriod branch)  {
    super(branch, "znagclati3pr6e00euajecc9dr8");
  }
  
  public TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "znagclati3pr6e00euajecc9dr8");
  }
  
  public boolean getHasMedicalAssistanceForEmergencyOrNonPreExistingDiseaseTerm() {
    return hasCovTerm("z1hi6if666cfiac6khk5i1g4esa");
  }
  
  public productmodel.OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseType getMedicalAssistanceForEmergencyOrNonPreExistingDiseaseTerm() {
    return (productmodel.OptionMedicalAssistanceForEmergencyOrNonPreExistingDiseaseType)getCovTerm("z1hi6if666cfiac6khk5i1g4esa");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDiseaseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease>() {
      public productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease newEmptyInstance() {
        return new productmodel.TRVMedicalAssistanceForEmergencyOrNonPreExistingDisease();
      }
      
      
    });
  }
}