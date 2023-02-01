package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/TRVLine/coveragepatterns/TRVMedicinesForAmbulatoryCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TRVMedicinesForAmbulatoryCare extends entity.TRVCoverCov {
  protected TRVMedicinesForAmbulatoryCare()  {
    super((java.lang.Void)null);
  }
  
  public TRVMedicinesForAmbulatoryCare(entity.PolicyPeriod branch)  {
    super(branch, "zk2ia1b17db7gdtuotpcna1cgrb");
  }
  
  public TRVMedicinesForAmbulatoryCare(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zk2ia1b17db7gdtuotpcna1cgrb");
  }
  
  public boolean getHasMedicinesForAmbulatoryCareLimTerm() {
    return hasCovTerm("zf5jusc44l23qehv3u8mnoqt5i8");
  }
  
  public productmodel.OptionMedicinesForAmbulatoryCareLimType getMedicinesForAmbulatoryCareLimTerm() {
    return (productmodel.OptionMedicinesForAmbulatoryCareLimType)getCovTerm("zf5jusc44l23qehv3u8mnoqt5i8");
  }
  
  static {
    com.guidewire._generated.productmodel.TRVMedicinesForAmbulatoryCareInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.TRVMedicinesForAmbulatoryCare>() {
      public productmodel.TRVMedicinesForAmbulatoryCare newEmptyInstance() {
        return new productmodel.TRVMedicinesForAmbulatoryCare();
      }
      
      
    });
  }
}