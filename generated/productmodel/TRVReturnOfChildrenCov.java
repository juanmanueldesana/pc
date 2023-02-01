package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVReturnOfChildrenCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVReturnOfChildrenCov extends entity.TRVCoverCov {
  protected TRVReturnOfChildrenCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVReturnOfChildrenCov(entity.PolicyPeriod branch)  {
    super(branch, "zo6iingd5h1dp2pr1q402a44fga");
  }
  
  public TRVReturnOfChildrenCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zo6iingd5h1dp2pr1q402a44fga");
  }
  
  public boolean getHasReturnOfChildrenTerm() {
    return hasCovTerm("z9lignp82n9dvcd194mepqjqca9");
  }
  
  public productmodel.GenericReturnOfChildrenType getReturnOfChildrenTerm() {
    return (productmodel.GenericReturnOfChildrenType)getCovTerm("z9lignp82n9dvcd194mepqjqca9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVReturnOfChildrenCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVReturnOfChildrenCov>() {
      public productmodel.TRVReturnOfChildrenCov newEmptyInstance() {
        return new productmodel.TRVReturnOfChildrenCov();
      }
      
      
    });
  }
}