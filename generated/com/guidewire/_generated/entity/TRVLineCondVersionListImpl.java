package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineCond.eti;TRVLineCond.eix;TRVLineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineCondVersionList {
  public TRVLineCondVersionListImpl(entity.TRVLineCond base)  {
    super(base);
  }
  
  public TRVLineCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVLineCond AsOf(java.util.Date date) {
    return (entity.TRVLineCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}