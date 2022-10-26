package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineMod.eti;TRVLineMod.eix;TRVLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVLineModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TRVLineMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineRF> TRVLineRateFactorsAsOf(java.util.Date date);
  
  
  void addToTRVLineRateFactors(entity.TRVLineRF bean);
  
  
  java.util.List<? extends entity.TRVLineMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.TRVLineRFVersionList> getTRVLineRateFactors();
  
  
  
}