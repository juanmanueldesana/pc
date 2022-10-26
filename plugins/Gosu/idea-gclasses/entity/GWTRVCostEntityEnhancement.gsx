package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "TRVCost.eti;TRVCost.eix;TRVCost.etx")
enhancement GWTRVCostEntityEnhancement : entity.TRVCost {
  property get Coverage () : entity.Coverage {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.trv.financials.TRVCostMethods") as gw.lob.trv.financials.TRVCostMethods).Coverage
  }
  
  property get Jurisdiction () : typekey.Jurisdiction {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.trv.financials.TRVCostMethods") as gw.lob.trv.financials.TRVCostMethods).Jurisdiction
  }
  
  property get OwningCoverable () : entity.Coverable {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.trv.financials.TRVCostMethods") as gw.lob.trv.financials.TRVCostMethods).OwningCoverable
  }
  
  
}