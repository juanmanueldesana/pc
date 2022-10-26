package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVCover.eti;TRVCover.eix;TRVCover.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVCoverVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVCoverVersionList {
  public TRVCoverVersionListImpl(entity.TRVCover base)  {
    super(base);
  }
  
  public TRVCoverVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TRVCover AsOf(java.util.Date date) {
    return (entity.TRVCover)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCover.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCover.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCover.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverMod> ModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVCover.MODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.TRVCoverCond bean) {
    addToArray(entity.TRVCover.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.TRVCoverCov bean) {
    addToArray(entity.TRVCover.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.TRVCoverExcl bean) {
    addToArray(entity.TRVCover.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToModifiers(entity.TRVCoverMod bean) {
    addToArray(entity.TRVCover.MODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCover> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.TRVCover.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.TRVCover.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.TRVCover.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverModVersionList> getModifiers() {
    return (java.util.List)getArray(entity.TRVCover.MODIFIERS_PROP.get());
  }
  
  
}