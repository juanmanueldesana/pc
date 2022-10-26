package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineCov.eti;TRVLineCov.eix;TRVLineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVLineCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVLineCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineCov> getAllVersions();
  
  
  
}