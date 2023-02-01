package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVEmergencyDentalCareExpensesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVEmergencyDentalCareExpensesCov extends entity.TRVCoverCov {
  protected TRVEmergencyDentalCareExpensesCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVEmergencyDentalCareExpensesCov(entity.PolicyPeriod branch)  {
    super(branch, "zvui6hjhmo8iocueq2b9vc4katb");
  }
  
  public TRVEmergencyDentalCareExpensesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zvui6hjhmo8iocueq2b9vc4katb");
  }
  
  public productmodel.OptionEmergencyDentalCareExpensesLimType getEmergencyDentalCareExpensesLimTerm() {
    return (productmodel.OptionEmergencyDentalCareExpensesLimType)getCovTerm("z8lg82bk5j2fj5vv5ghieieq5p9");
  }
  
  public boolean getHasEmergencyDentalCareExpensesLimTerm() {
    return hasCovTerm("z8lg82bk5j2fj5vv5ghieieq5p9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVEmergencyDentalCareExpensesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVEmergencyDentalCareExpensesCov>() {
      public productmodel.TRVEmergencyDentalCareExpensesCov newEmptyInstance() {
        return new productmodel.TRVEmergencyDentalCareExpensesCov();
      }
      
      
    });
  }
}