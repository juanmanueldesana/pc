package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLine.eti;TRVLine.eix;TRVLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TRVLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the PolicyTravelers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyTravelers(entity.PolicyTraveler element);
  
  
  /**
   * Adds the given element to the TRVCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVCosts(entity.TRVCost element);
  
  
  /**
   * Adds the given element to the TRVCoverCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVCoverCosts(entity.TRVCoverCost element);
  
  
  /**
   * Adds the given element to the TRVCovers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVCovers(entity.TRVCover element);
  
  
  /**
   * Adds the given element to the TRVLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVLineConditions(entity.TRVLineCond element);
  
  
  /**
   * Adds the given element to the TRVLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVLineCoverages(entity.TRVLineCov element);
  
  
  /**
   * Adds the given element to the TRVLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVLineExclusions(entity.TRVLineExcl element);
  
  
  /**
   * Adds the given element to the TRVLineModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTRVLineModifiers(entity.TRVLineMod element);
  
  
  /**
   * Gets the value of the PolicyTravelers field.
   * PolicyTravelers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTraveler[] getPolicyTravelers();
  
  
  /**
   * Gets the value of the TRVCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCost[] getTRVCosts();
  
  
  /**
   * Gets the value of the TRVCoverCosts field.
   * Traveler Costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCoverCost[] getTRVCoverCosts();
  
  
  /**
   * Gets the value of the TRVCovers field.
   * Traveler Insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVCover[] getTRVCovers();
  
  
  /**
   * Gets the value of the TRVLineConditions field.
   * Line-level conditions for Seguro de Viaje
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineCond[] getTRVLineConditions();
  
  
  /**
   * Gets the value of the TRVLineCoverages field.
   * Line-level coverages for Seguro de Viaje
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineCov[] getTRVLineCoverages();
  
  
  /**
   * Gets the value of the TRVLineExclusions field.
   * Line-level exclusions for Seguro de Viaje
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineExcl[] getTRVLineExclusions();
  
  
  /**
   * Gets the value of the TRVLineModifiers field.
   * Line-level modifiers for Seguro de Viaje
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLineMod[] getTRVLineModifiers();
  
  
  /**
   * Removes the given element from the PolicyTravelers array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyTravelers(entity.PolicyTraveler element);
  
  
  /**
   * Removes the given element from the PolicyTravelers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyTravelers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVCosts(entity.TRVCost element);
  
  
  /**
   * Removes the given element from the TRVCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVCoverCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVCoverCosts(entity.TRVCoverCost element);
  
  
  /**
   * Removes the given element from the TRVCoverCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVCoverCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVCovers array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVCovers(entity.TRVCover element);
  
  
  /**
   * Removes the given element from the TRVCovers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVCovers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVLineConditions(entity.TRVLineCond element);
  
  
  /**
   * Removes the given element from the TRVLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVLineCoverages(entity.TRVLineCov element);
  
  
  /**
   * Removes the given element from the TRVLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVLineExclusions(entity.TRVLineExcl element);
  
  
  /**
   * Removes the given element from the TRVLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TRVLineModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromTRVLineModifiers(entity.TRVLineMod element);
  
  
  /**
   * Removes the given element from the TRVLineModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTRVLineModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the PolicyTravelers field.
   */
  public void setPolicyTravelers(entity.PolicyTraveler[] value);
  
  
  /**
   * Sets the value of the TRVCosts field.
   */
  public void setTRVCosts(entity.TRVCost[] value);
  
  
  /**
   * Sets the value of the TRVCoverCosts field.
   */
  public void setTRVCoverCosts(entity.TRVCoverCost[] value);
  
  
  /**
   * Sets the value of the TRVCovers field.
   */
  public void setTRVCovers(entity.TRVCover[] value);
  
  
  /**
   * Sets the value of the TRVLineConditions field.
   */
  public void setTRVLineConditions(entity.TRVLineCond[] value);
  
  
  /**
   * Sets the value of the TRVLineCoverages field.
   */
  public void setTRVLineCoverages(entity.TRVLineCov[] value);
  
  
  /**
   * Sets the value of the TRVLineExclusions field.
   */
  public void setTRVLineExclusions(entity.TRVLineExcl[] value);
  
  
  /**
   * Sets the value of the TRVLineModifiers field.
   */
  public void setTRVLineModifiers(entity.TRVLineMod[] value);
  
  
  
}