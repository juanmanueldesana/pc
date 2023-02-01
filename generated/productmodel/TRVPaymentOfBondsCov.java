package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVPaymentOfBondsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVPaymentOfBondsCov extends entity.TRVCoverCov {
  protected TRVPaymentOfBondsCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVPaymentOfBondsCov(entity.PolicyPeriod branch)  {
    super(branch, "zsrhs02fj2sbpe6h0uiefvkofsb");
  }
  
  public TRVPaymentOfBondsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zsrhs02fj2sbpe6h0uiefvkofsb");
  }
  
  public boolean getHasPaymentOfBondsLimTerm() {
    return hasCovTerm("zn4icpknha4sv69372ekt5knpua");
  }
  
  public productmodel.OptionPaymentOfBondsLimType getPaymentOfBondsLimTerm() {
    return (productmodel.OptionPaymentOfBondsLimType)getCovTerm("zn4icpknha4sv69372ekt5knpua");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVPaymentOfBondsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVPaymentOfBondsCov>() {
      public productmodel.TRVPaymentOfBondsCov newEmptyInstance() {
        return new productmodel.TRVPaymentOfBondsCov();
      }
      
      
    });
  }
}