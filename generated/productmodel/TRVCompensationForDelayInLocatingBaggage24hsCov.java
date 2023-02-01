package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVCompensationForDelayInLocatingBaggage24hsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVCompensationForDelayInLocatingBaggage24hsCov extends entity.TRVCoverCov {
  protected TRVCompensationForDelayInLocatingBaggage24hsCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVCompensationForDelayInLocatingBaggage24hsCov(entity.PolicyPeriod branch)  {
    super(branch, "z6qjghfm4qu79eur315shkhj8qb");
  }
  
  public TRVCompensationForDelayInLocatingBaggage24hsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z6qjghfm4qu79eur315shkhj8qb");
  }
  
  public productmodel.DirectCompensationForDelayInLocatingBaggage24hsLimType getCompensationForDelayInLocatingBaggage24hsLimTerm() {
    return (productmodel.DirectCompensationForDelayInLocatingBaggage24hsLimType)getCovTerm("znhji9p4bi0b0ftcf5o69tf6ig8");
  }
  
  public boolean getHasCompensationForDelayInLocatingBaggage24hsLimTerm() {
    return hasCovTerm("znhji9p4bi0b0ftcf5o69tf6ig8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVCompensationForDelayInLocatingBaggage24hsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVCompensationForDelayInLocatingBaggage24hsCov>() {
      public productmodel.TRVCompensationForDelayInLocatingBaggage24hsCov newEmptyInstance() {
        return new productmodel.TRVCompensationForDelayInLocatingBaggage24hsCov();
      }
      
      
    });
  }
}