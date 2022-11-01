package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TRVLine.eti;TRVLine.eix;TRVLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TRVLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.TRVLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyTraveler> PolicyTravelersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCost> TRVCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCoverCost> TRVCoverCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVCover> TRVCoversAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineCond> TRVLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineCov> TRVLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineExcl> TRVLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TRVLineMod> TRVLineModifiersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToPolicyTravelers(entity.PolicyTraveler bean);
  
  
  void addToTRVCosts(entity.TRVCost bean);
  
  
  void addToTRVCoverCosts(entity.TRVCoverCost bean);
  
  
  void addToTRVCovers(entity.TRVCover bean);
  
  
  void addToTRVLineConditions(entity.TRVLineCond bean);
  
  
  void addToTRVLineCoverages(entity.TRVLineCov bean);
  
  
  void addToTRVLineExclusions(entity.TRVLineExcl bean);
  
  
  void addToTRVLineModifiers(entity.TRVLineMod bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.TRVLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.PolicyTravelerVersionList> getPolicyTravelers();
  
  
  java.util.List<? extends entity.windowed.TRVCostVersionList> getTRVCosts();
  
  
  java.util.List<? extends entity.windowed.TRVCoverCostVersionList> getTRVCoverCosts();
  
  
  java.util.List<? extends entity.windowed.TRVCoverVersionList> getTRVCovers();
  
  
  java.util.List<? extends entity.windowed.TRVLineCondVersionList> getTRVLineConditions();
  
  
  java.util.List<? extends entity.windowed.TRVLineCovVersionList> getTRVLineCoverages();
  
  
  java.util.List<? extends entity.windowed.TRVLineExclVersionList> getTRVLineExclusions();
  
  
  java.util.List<? extends entity.windowed.TRVLineModVersionList> getTRVLineModifiers();
  
  
  
}