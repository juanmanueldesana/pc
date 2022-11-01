package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyTraveler.eti;PolicyTraveler.eix;PolicyTraveler.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyTravelerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyTravelerVersionList {
  public PolicyTravelerVersionListImpl(entity.PolicyTraveler base)  {
    super(base);
  }
  
  public PolicyTravelerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyTraveler AsOf(java.util.Date date) {
    return (entity.PolicyTraveler)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyTraveler> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}