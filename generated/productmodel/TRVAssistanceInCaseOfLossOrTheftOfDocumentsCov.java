package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov extends entity.TRVCoverCov {
  protected TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov(entity.PolicyPeriod branch)  {
    super(branch, "z8hgadmp8imsbbnal8t7pv4s8nb");
  }
  
  public TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z8hgadmp8imsbbnal8t7pv4s8nb");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVAssistanceInCaseOfLossOrTheftOfDocumentsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov>() {
      public productmodel.TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov newEmptyInstance() {
        return new productmodel.TRVAssistanceInCaseOfLossOrTheftOfDocumentsCov();
      }
      
      
    });
  }
}