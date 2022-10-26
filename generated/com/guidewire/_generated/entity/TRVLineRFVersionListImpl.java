package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineRF.eti;TRVLineRF.eix;TRVLineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineRFVersionList {
  public TRVLineRFVersionListImpl(entity.TRVLineRF base)  {
    super(base);
  }
  
  public TRVLineRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVLineRF AsOf(java.util.Date date) {
    return (entity.TRVLineRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}