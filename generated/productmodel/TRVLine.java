package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/TRVLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVLine extends entity.TRVLine {
  protected TRVLine()  {
    super((java.lang.Void)null);
  }
  
  public TRVLine(entity.PolicyPeriod branch)  {
    super(branch, "TRVLine");
  }
  
  public TRVLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "TRVLine");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVLine>() {
      public productmodel.TRVLine newEmptyInstance() {
        return new productmodel.TRVLine();
      }
      
      
    });
  }
}