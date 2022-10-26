package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCost.eti;TRVCost.eix;TRVCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.TRVTransaction bean);
  
  
  java.util.List<? extends entity.TRVCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.TRVTransactionVersionList> getTransactions();
  
  
  
}