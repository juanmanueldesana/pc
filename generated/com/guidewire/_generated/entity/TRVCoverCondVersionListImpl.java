package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCond.eti;TRVCoverCond.eix;TRVCoverCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverCondVersionList {
  public TRVCoverCondVersionListImpl(entity.TRVCoverCond base)  {
    super(base);
  }
  
  public TRVCoverCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverCond AsOf(java.util.Date date) {
    return (entity.TRVCoverCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}