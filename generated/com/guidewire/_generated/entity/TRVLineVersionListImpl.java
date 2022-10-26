package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLine.eti;TRVLine.eix;TRVLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TRVLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TRVLineVersionList {
  public TRVLineVersionListImpl(entity.TRVLine base)  {
    super(base);
  }
  
  public TRVLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.TRVLine AsOf(java.util.Date date) {
    return (entity.TRVLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCost> TRVCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCoverCost> TRVCoverCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVCOVERCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVCover> TRVCoversAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVCOVERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineCond> TRVLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineCov> TRVLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineExcl> TRVLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLineMod> TRVLineModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.TRVLine.TRVLINEMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.TRVLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.TRVLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.TRVLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.TRVLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVCosts(entity.TRVCost bean) {
    addToArray(entity.TRVLine.TRVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVCoverCosts(entity.TRVCoverCost bean) {
    addToArray(entity.TRVLine.TRVCOVERCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVCovers(entity.TRVCover bean) {
    addToArray(entity.TRVLine.TRVCOVERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVLineConditions(entity.TRVLineCond bean) {
    addToArray(entity.TRVLine.TRVLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVLineCoverages(entity.TRVLineCov bean) {
    addToArray(entity.TRVLine.TRVLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVLineExclusions(entity.TRVLineExcl bean) {
    addToArray(entity.TRVLine.TRVLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTRVLineModifiers(entity.TRVLineMod bean) {
    addToArray(entity.TRVLine.TRVLINEMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.TRVLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TRVLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.TRVLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.TRVLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.TRVLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCostVersionList> getTRVCosts() {
    return (java.util.List)getArray(entity.TRVLine.TRVCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverCostVersionList> getTRVCoverCosts() {
    return (java.util.List)getArray(entity.TRVLine.TRVCOVERCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVCoverVersionList> getTRVCovers() {
    return (java.util.List)getArray(entity.TRVLine.TRVCOVERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVLineCondVersionList> getTRVLineConditions() {
    return (java.util.List)getArray(entity.TRVLine.TRVLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVLineCovVersionList> getTRVLineCoverages() {
    return (java.util.List)getArray(entity.TRVLine.TRVLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVLineExclVersionList> getTRVLineExclusions() {
    return (java.util.List)getArray(entity.TRVLine.TRVLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TRVLineModVersionList> getTRVLineModifiers() {
    return (java.util.List)getArray(entity.TRVLine.TRVLINEMODIFIERS_PROP.get());
  }
  
  
}