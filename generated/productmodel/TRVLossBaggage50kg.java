package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVLossBaggage50kg.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVLossBaggage50kg extends entity.TRVCoverCov {
  protected TRVLossBaggage50kg()  {
    super((java.lang.Void)null);
  }
  
  public TRVLossBaggage50kg(entity.PolicyPeriod branch)  {
    super(branch, "z9aj65ao7gba99mukl2ag0kcahb");
  }
  
  public TRVLossBaggage50kg(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z9aj65ao7gba99mukl2ag0kcahb");
  }
  
  public boolean getHasLossBaggage50KgLimTerm() {
    return hasCovTerm("z75g6cj2par2l3spu08fjr6sqt8");
  }
  
  public productmodel.OptionLossBaggage50KgLimType getLossBaggage50KgLimTerm() {
    return (productmodel.OptionLossBaggage50KgLimType)getCovTerm("z75g6cj2par2l3spu08fjr6sqt8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVLossBaggage50kgInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVLossBaggage50kg>() {
      public productmodel.TRVLossBaggage50kg newEmptyInstance() {
        return new productmodel.TRVLossBaggage50kg();
      }
      
      
    });
  }
}