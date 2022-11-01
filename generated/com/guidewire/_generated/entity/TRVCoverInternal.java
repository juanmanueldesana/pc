package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCover.eti;TRVCover.eix;TRVCover.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVCoverInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.TRVCoverCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.TRVCoverCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.TRVCoverExcl element);
  
  
  /**
   * Adds the given element to the Modifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToModifiers(entity.TRVCoverMod element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCover getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Conditions field.
   * Conditions directly attached to TRV Cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverCond[] getConditions();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to TRV Cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to TRV Cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCover getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Modifiers field.
   * Modifiers directly attached to TRV Cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverMod[] getModifiers();
  
  
  /**
   * Gets the value of the TRVLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLine getTRVLine();
  
  
  public gw.pl.persistence.core.Key getTRVLineID();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.TRVCoverCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.TRVCoverCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.TRVCoverExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromModifiers(entity.TRVCoverMod element);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.TRVCover value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.TRVCoverCond[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.TRVCoverCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.TRVCoverExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.TRVCover value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Modifiers field.
   */
  public void setModifiers(entity.TRVCoverMod[] value);
  
  
  /**
   * Sets the value of the TRVLine field.
   */
  public void setTRVLine(entity.TRVLine value);
  
  
  public void setTRVLineID(gw.pl.persistence.core.Key value);
  
  
  
}