package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverRF.eti;TRVCoverRF.eix;TRVCoverRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVCoverRFInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.RateFactorInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.RateFactorAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverRF getBasedOnValue();
  
  
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
  public entity.TRVCoverRF getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the TRVCoverModifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverMod getTRVCoverModifier();
  
  
  public gw.pl.persistence.core.Key getTRVCoverModifierID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.TRVCoverRF value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.TRVCoverRF value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TRVCoverModifier field.
   */
  public void setTRVCoverModifier(entity.TRVCoverMod value);
  
  
  public void setTRVCoverModifierID(gw.pl.persistence.core.Key value);
  
  
  
}