package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVCompanionInCaseOfHospitalizationCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVCompanionInCaseOfHospitalizationCov extends entity.TRVCoverCov {
  protected TRVCompanionInCaseOfHospitalizationCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVCompanionInCaseOfHospitalizationCov(entity.PolicyPeriod branch)  {
    super(branch, "zdmg6dtd0m0kl1faqf9n3g1ns69");
  }
  
  public TRVCompanionInCaseOfHospitalizationCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zdmg6dtd0m0kl1faqf9n3g1ns69");
  }
  
  public boolean getHasTicketForCompanionLimTerm() {
    return hasCovTerm("zo7iq0nlomsqo2857dln1ksbsia");
  }
  
  public productmodel.OptionTicketForCompanionLimType getTicketForCompanionLimTerm() {
    return (productmodel.OptionTicketForCompanionLimType)getCovTerm("zo7iq0nlomsqo2857dln1ksbsia");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVCompanionInCaseOfHospitalizationCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVCompanionInCaseOfHospitalizationCov>() {
      public productmodel.TRVCompanionInCaseOfHospitalizationCov newEmptyInstance() {
        return new productmodel.TRVCompanionInCaseOfHospitalizationCov();
      }
      
      
    });
  }
}