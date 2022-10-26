package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverRF.eti;TRVCoverRF.eix;TRVCoverRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverRFVersionList {
  public TRVCoverRFVersionListImpl(entity.TRVCoverRF base)  {
    super(base);
  }
  
  public TRVCoverRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverRF AsOf(java.util.Date date) {
    return (entity.TRVCoverRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}