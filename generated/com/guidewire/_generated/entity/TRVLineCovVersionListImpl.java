package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineCov.eti;TRVLineCov.eix;TRVLineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineCovVersionList {
  public TRVLineCovVersionListImpl(entity.TRVLineCov base)  {
    super(base);
  }
  
  public TRVLineCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVLineCov AsOf(java.util.Date date) {
    return (entity.TRVLineCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}