package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCond.eti;TRVCoverCond.eix;TRVCoverCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCoverCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverCond> getAllVersions();
  
  
  
}