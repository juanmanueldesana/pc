package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVTransaction.eti;TRVTransaction.eix;TRVTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVTransactionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.TransactionInternal, gw.api.domain.financials.TransactionAdapter {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVTransaction getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVTransaction getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the TRVCost field.
   * The cost this transaction modifies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCost getTRVCost();
  
  
  public gw.pl.persistence.core.Key getTRVCostID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.TRVTransaction value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.TRVTransaction value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TRVCost field.
   */
  public void setTRVCost(entity.TRVCost value);
  
  
  public void setTRVCostID(gw.pl.persistence.core.Key value);
  
  
  
}