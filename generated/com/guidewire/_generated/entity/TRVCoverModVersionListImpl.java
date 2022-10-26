package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverMod.eti;TRVCoverMod.eix;TRVCoverMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverModVersionList {
  public TRVCoverModVersionListImpl(entity.TRVCoverMod base)  {
    super(base);
  }
  
  public TRVCoverModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverMod AsOf(java.util.Date date) {
    return (entity.TRVCoverMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverRF> TRVCoverRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCoverMod.TRVCOVERRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTRVCoverRateFactors(entity.TRVCoverRF bean) {
    addToArray(entity.TRVCoverMod.TRVCOVERRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverRFVersionList> getTRVCoverRateFactors() {
    return (java.util.List)getArray(entity.TRVCoverMod.TRVCOVERRATEFACTORS_PROP.get());
  }
  
  
}