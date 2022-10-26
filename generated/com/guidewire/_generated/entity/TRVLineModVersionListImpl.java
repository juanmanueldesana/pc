package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineMod.eti;TRVLineMod.eix;TRVLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineModVersionList {
  public TRVLineModVersionListImpl(entity.TRVLineMod base)  {
    super(base);
  }
  
  public TRVLineModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVLineMod AsOf(java.util.Date date) {
    return (entity.TRVLineMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineRF> TRVLineRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLineMod.TRVLINERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTRVLineRateFactors(entity.TRVLineRF bean) {
    addToArray(entity.TRVLineMod.TRVLINERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVLineRFVersionList> getTRVLineRateFactors() {
    return (java.util.List)getArray(entity.TRVLineMod.TRVLINERATEFACTORS_PROP.get());
  }
  
  
}