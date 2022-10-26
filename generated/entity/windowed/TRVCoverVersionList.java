package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCover.eti;TRVCover.eix;TRVCover.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCover AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverMod> ModifiersAsOf(java.util.Date date);
  
  
  void addToConditions(entity.TRVCoverCond bean);
  
  
  void addToCoverages(entity.TRVCoverCov bean);
  
  
  void addToExclusions(entity.TRVCoverExcl bean);
  
  
  void addToModifiers(entity.TRVCoverMod bean);
  
  
  java.util.List<? extends entity.TRVCover> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.TRVCoverCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.TRVCoverCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.TRVCoverExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.TRVCoverModVersionList> getModifiers();
  
  
  
}