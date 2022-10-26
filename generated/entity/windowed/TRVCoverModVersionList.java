package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverMod.eti;TRVCoverMod.eix;TRVCoverMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVCoverModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVCoverMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverRF> TRVCoverRateFactorsAsOf(java.util.Date date);
  
  
  void addToTRVCoverRateFactors(entity.TRVCoverRF bean);
  
  
  java.util.List<? extends entity.TRVCoverMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.TRVCoverRFVersionList> getTRVCoverRateFactors();
  
  
  
}