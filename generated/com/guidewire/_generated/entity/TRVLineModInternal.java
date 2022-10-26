package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLineMod.eti;TRVLineMod.eix;TRVLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVLineModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the TRVLineRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVLineRateFactors(entity.TRVLineRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineMod getBasedOnValue();
  
  
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
  public entity.TRVLineMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TRVLineMod getSubtype();
  
  
  /**
   * Gets the value of the TRVLine field.
   * Seguro de Viaje
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLine getTRVLine();
  
  
  public gw.pl.persistence.core.Key getTRVLineID();
  
  
  /**
   * Gets the value of the TRVLineRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineRF[] getTRVLineRateFactors();
  
  
  /**
   * Removes the given element from the TRVLineRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVLineRateFactors(entity.TRVLineRF element);
  
  
  /**
   * Removes the given element from the TRVLineRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVLineRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.TRVLineMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.TRVLineMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.TRVLineMod value);
  
  
  /**
   * Sets the value of the TRVLine field.
   */
  public void setTRVLine(entity.TRVLine value);
  
  
  public void setTRVLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TRVLineRateFactors field.
   */
  public void setTRVLineRateFactors(entity.TRVLineRF[] value);
  
  
  
}