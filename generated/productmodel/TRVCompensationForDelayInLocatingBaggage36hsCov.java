package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVCompensationForDelayInLocatingBaggage36hsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVCompensationForDelayInLocatingBaggage36hsCov extends entity.TRVCoverCov {
  protected TRVCompensationForDelayInLocatingBaggage36hsCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVCompensationForDelayInLocatingBaggage36hsCov(entity.PolicyPeriod branch)  {
    super(branch, "z1ojio6ec005u1hb4eri0819uob");
  }
  
  public TRVCompensationForDelayInLocatingBaggage36hsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z1ojio6ec005u1hb4eri0819uob");
  }
  
  public productmodel.OptionCompensationForDelayInLocatingBaggage36hsLimType getCompensationForDelayInLocatingBaggage36hsLimTerm() {
    return (productmodel.OptionCompensationForDelayInLocatingBaggage36hsLimType)getCovTerm("zo8ikp794gv48e4sro9apjkdd7a");
  }
  
  public boolean getHasCompensationForDelayInLocatingBaggage36hsLimTerm() {
    return hasCovTerm("zo8ikp794gv48e4sro9apjkdd7a");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVCompensationForDelayInLocatingBaggage36hsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVCompensationForDelayInLocatingBaggage36hsCov>() {
      public productmodel.TRVCompensationForDelayInLocatingBaggage36hsCov newEmptyInstance() {
        return new productmodel.TRVCompensationForDelayInLocatingBaggage36hsCov();
      }
      
      
    });
  }
}