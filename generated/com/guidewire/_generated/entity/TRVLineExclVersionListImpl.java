package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineExcl.eti;TRVLineExcl.eix;TRVLineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineExclVersionList {
  public TRVLineExclVersionListImpl(entity.TRVLineExcl base)  {
    super(base);
  }
  
  public TRVLineExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVLineExcl AsOf(java.util.Date date) {
    return (entity.TRVLineExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}