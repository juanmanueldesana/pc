package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCoverMod.eti;TRVCoverMod.eix;TRVCoverMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVCoverModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the TRVCoverRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVCoverRateFactors(entity.TRVCoverRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverMod getBasedOnValue();
  
  
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
  public entity.TRVCoverMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TRVCoverMod getSubtype();
  
  
  /**
   * Gets the value of the TRVCover field.
   * TRV Cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCover getTRVCover();
  
  
  public gw.pl.persistence.core.Key getTRVCoverID();
  
  
  /**
   * Gets the value of the TRVCoverRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverRF[] getTRVCoverRateFactors();
  
  
  /**
   * Removes the given element from the TRVCoverRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVCoverRateFactors(entity.TRVCoverRF element);
  
  
  /**
   * Removes the given element from the TRVCoverRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVCoverRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.TRVCoverMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.TRVCoverMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.TRVCoverMod value);
  
  
  /**
   * Sets the value of the TRVCover field.
   */
  public void setTRVCover(entity.TRVCover value);
  
  
  public void setTRVCoverID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TRVCoverRateFactors field.
   */
  public void setTRVCoverRateFactors(entity.TRVCoverRF[] value);
  
  
  
}