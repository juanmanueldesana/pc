package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCost.eti;TRVCost.eix;TRVCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCostVersionList {
  public TRVCostVersionListImpl(entity.TRVCost base)  {
    super(base);
  }
  
  public TRVCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCost AsOf(java.util.Date date) {
    return (entity.TRVCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.TRVTransaction bean) {
    addToArray(entity.TRVCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.TRVCost.TRANSACTIONS_PROP.get());
  }
  
  
}