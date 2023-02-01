package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVAccompanyingFamilyAccommodationUp5Days.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVAccompanyingFamilyAccommodationUp5Days extends entity.TRVCoverCov {
  protected TRVAccompanyingFamilyAccommodationUp5Days()  {
    super((java.lang.Void)null);
  }
  
  public TRVAccompanyingFamilyAccommodationUp5Days(entity.PolicyPeriod branch)  {
    super(branch, "zhvhelmrma0m0c3p6bjansnb1ta");
  }
  
  public TRVAccompanyingFamilyAccommodationUp5Days(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zhvhelmrma0m0c3p6bjansnb1ta");
  }
  
  public productmodel.DirectAccompanyingFamilyAccommodationUpTo5DaysType getAccompanyingFamilyAccommodationUpTo5DaysTerm() {
    return (productmodel.DirectAccompanyingFamilyAccommodationUpTo5DaysType)getCovTerm("z5mie8vektq5o2b7ae29l51vdc9");
  }
  
  public boolean getHasAccompanyingFamilyAccommodationUpTo5DaysTerm() {
    return hasCovTerm("z5mie8vektq5o2b7ae29l51vdc9");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVAccompanyingFamilyAccommodationUp5DaysInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVAccompanyingFamilyAccommodationUp5Days>() {
      public productmodel.TRVAccompanyingFamilyAccommodationUp5Days newEmptyInstance() {
        return new productmodel.TRVAccompanyingFamilyAccommodationUp5Days();
      }
      
      
    });
  }
}