package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVTransaction.eti;TRVTransaction.eix;TRVTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVTransactionVersionList {
  public TRVTransactionVersionListImpl(entity.TRVTransaction base)  {
    super(base);
  }
  
  public TRVTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVTransaction AsOf(java.util.Date date) {
    return (entity.TRVTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}