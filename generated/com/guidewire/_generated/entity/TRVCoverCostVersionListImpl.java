package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverCost.eti;TRVCoverCost.eix;TRVCoverCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverCostVersionList {
  public TRVCoverCostVersionListImpl(entity.TRVCoverCost base)  {
    super(base);
  }
  
  public TRVCoverCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCoverCost AsOf(java.util.Date date) {
    return (entity.TRVCoverCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCoverCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.TRVTransaction bean) {
    addToArray(entity.TRVCoverCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.TRVCoverCost.TRANSACTIONS_PROP.get());
  }
  
  
}