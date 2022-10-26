package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVTransaction.eti;TRVTransaction.eix;TRVTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVTransaction> getAllVersions();
  
  
  
}