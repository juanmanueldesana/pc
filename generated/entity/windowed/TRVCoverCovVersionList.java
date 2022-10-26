package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCov.eti;TRVCoverCov.eix;TRVCoverCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCoverCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverCov> getAllVersions();
  
  
  
}