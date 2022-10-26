package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverExcl.eti;TRVCoverExcl.eix;TRVCoverExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCoverExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverExcl> getAllVersions();
  
  
  
}