package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCov.eti;TRVCoverCov.eix;TRVCoverCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverCovVersionList {
  public TRVCoverCovVersionListImpl(entity.TRVCoverCov base)  {
    super(base);
  }
  
  public TRVCoverCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverCov AsOf(java.util.Date date) {
    return (entity.TRVCoverCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}