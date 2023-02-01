package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicinesForHospitalizationCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVMedicinesForHospitalizationCov extends entity.TRVCoverCov {
  protected TRVMedicinesForHospitalizationCov()  {
    super((java.lang.Void)null);
  }
  
  public TRVMedicinesForHospitalizationCov(entity.PolicyPeriod branch)  {
    super(branch, "zakja7ai8g9chfllroavt960r8b");
  }
  
  public TRVMedicinesForHospitalizationCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zakja7ai8g9chfllroavt960r8b");
  }
  
  public boolean getHasMedicinesForHospitalizationGenericTerm() {
    return hasCovTerm("zkii8furuh5lm1dmq6tsps66ata");
  }
  
  public productmodel.GenericMedicinesForHospitalizationGenericType getMedicinesForHospitalizationGenericTerm() {
    return (productmodel.GenericMedicinesForHospitalizationGenericType)getCovTerm("zkii8furuh5lm1dmq6tsps66ata");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVMedicinesForHospitalizationCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVMedicinesForHospitalizationCov>() {
      public productmodel.TRVMedicinesForHospitalizationCov newEmptyInstance() {
        return new productmodel.TRVMedicinesForHospitalizationCov();
      }
      
      
    });
  }
}