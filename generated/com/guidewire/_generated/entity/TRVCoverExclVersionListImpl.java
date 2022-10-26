package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverExcl.eti;TRVCoverExcl.eix;TRVCoverExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverExclVersionList {
  public TRVCoverExclVersionListImpl(entity.TRVCoverExcl base)  {
    super(base);
  }
  
  public TRVCoverExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverExcl AsOf(java.util.Date date) {
    return (entity.TRVCoverExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}