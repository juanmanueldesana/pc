package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov extends entity.TRVCoverCov {
  protected TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov(entity.PolicyPeriod branch)  {
    super(branch, "ze1hg6e5mlevmbi4ggkte5leevb");
  }
  
  public TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ze1hg6e5mlevmbi4ggkte5leevb");
  }
  
  public productmodel.OptionEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeLimType getEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeLimTerm() {
    return (productmodel.OptionEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeLimType)getCovTerm("zp7h2leiefr66effhqh8c5m8rg9");
  }
  
  public boolean getHasEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeLimTerm() {
    return hasCovTerm("zp7h2leiefr66effhqh8c5m8rg9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov>() {
      public productmodel.TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov newEmptyInstance() {
        return new productmodel.TRVEarlyReturnAccidentDeathOrDiseaseOrSeriousLossAtHomeCov();
      }
      
      
    });
  }
}