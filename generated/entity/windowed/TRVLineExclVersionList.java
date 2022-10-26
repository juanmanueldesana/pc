package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineExcl.eti;TRVLineExcl.eix;TRVLineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVLineExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVLineExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineExcl> getAllVersions();
  
  
  
}