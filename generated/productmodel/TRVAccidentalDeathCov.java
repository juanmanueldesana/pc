package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVAccidentalDeathCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVAccidentalDeathCov extends entity.TRVCoverCov {
  protected TRVAccidentalDeathCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVAccidentalDeathCov(entity.PolicyPeriod branch)  {
    super(branch, "zregs7ga94h0pastlgnsmj7qqc8");
  }
  
  public TRVAccidentalDeathCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zregs7ga94h0pastlgnsmj7qqc8");
  }
  
  public productmodel.OptionAccidentalDeathLimType getAccidentalDeathLimTerm() {
    return (productmodel.OptionAccidentalDeathLimType)getCovTerm("zjgi6tjuvui195m88lsf2k450da");
  }
  
  public boolean getHasAccidentalDeathLimTerm() {
    return hasCovTerm("zjgi6tjuvui195m88lsf2k450da");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVAccidentalDeathCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVAccidentalDeathCov>() {
      public productmodel.TRVAccidentalDeathCov newEmptyInstance() {
        return new productmodel.TRVAccidentalDeathCov();
      }
      
      
    });
  }
}