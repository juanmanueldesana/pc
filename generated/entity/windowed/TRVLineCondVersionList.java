package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineCond.eti;TRVLineCond.eix;TRVLineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVLineCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVLineCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineCond> getAllVersions();
  
  
  
}