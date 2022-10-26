package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCost.eti;TRVCoverCost.eix;TRVCoverCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverCostVersionList extends entity.windowed.TRVCostVersionList {
  entity.TRVCoverCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.TRVTransaction bean);
  
  
  java.util.List<? extends entity.TRVCoverCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.TRVTransactionVersionList> getTransactions();
  
  
  
}