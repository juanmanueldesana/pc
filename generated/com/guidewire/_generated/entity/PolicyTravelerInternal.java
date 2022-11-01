package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyTraveler.eti;PolicyTraveler.eix;PolicyTraveler.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyTravelerInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the TRVLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TRVLine getTRVLine();
  
  
  public gw.pl.persistence.core.Key getTRVLineID();
  
  
  /**
   * Sets the value of the TRVLine field.
   */
  public void setTRVLine(entity.TRVLine value);
  
  
  public void setTRVLineID(gw.pl.persistence.core.Key value);
  
  
  
}