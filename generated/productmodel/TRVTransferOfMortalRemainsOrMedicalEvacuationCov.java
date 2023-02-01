package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVTransferOfMortalRemainsOrMedicalEvacuationCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVTransferOfMortalRemainsOrMedicalEvacuationCov extends entity.TRVCoverCov {
  protected TRVTransferOfMortalRemainsOrMedicalEvacuationCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVTransferOfMortalRemainsOrMedicalEvacuationCov(entity.PolicyPeriod branch)  {
    super(branch, "zenjeq9a0su9r9fbs55q9f98to8");
  }
  
  public TRVTransferOfMortalRemainsOrMedicalEvacuationCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zenjeq9a0su9r9fbs55q9f98to8");
  }
  
  public boolean getHasTransferOfMortalRemainsOrMedicalEvacuationLimTerm() {
    return hasCovTerm("znkien7nndmo84p67629ov0l719");
  }
  
  public productmodel.OptionTransferOfMortalRemainsOrMedicalEvacuationLimType getTransferOfMortalRemainsOrMedicalEvacuationLimTerm() {
    return (productmodel.OptionTransferOfMortalRemainsOrMedicalEvacuationLimType)getCovTerm("znkien7nndmo84p67629ov0l719");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVTransferOfMortalRemainsOrMedicalEvacuationCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVTransferOfMortalRemainsOrMedicalEvacuationCov>() {
      public productmodel.TRVTransferOfMortalRemainsOrMedicalEvacuationCov newEmptyInstance() {
        return new productmodel.TRVTransferOfMortalRemainsOrMedicalEvacuationCov();
      }
      
      
    });
  }
}