package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGWizardSummary_accScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends NPGWizardSummary_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 182, column 38
    function valueRoot_85 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 211, column 120
    function value_102 () : java.lang.String {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", cost.Fields.Count)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 182, column 38
    function value_84 () : java.lang.String {
      return cost.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 187, column 39
    function value_87 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 192, column 41
    function value_90 () : java.lang.String {
      return cost.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at NPGWizardSummary_accScreen.pcf: line 197, column 41
    function value_93 () : java.lang.String {
      return cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at NPGWizardSummary_accScreen.pcf: line 202, column 40
    function value_96 () : java.lang.String {
      return cost.CoverageName
    }
    
    // 'value' attribute on TextCell (id=ParentCost_Cell) at NPGWizardSummary_accScreen.pcf: line 207, column 38
    function value_99 () : java.lang.String {
      return cost.ParentCost
    }
    
    property get cost () : gw.acc.npg.wizard.CostStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.CostStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends NPGWizardSummary_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 236, column 40
    function valueRoot_109 () : java.lang.Object {
      return entity
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 236, column 40
    function value_108 () : java.lang.String {
      return entity.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 241, column 41
    function value_111 () : java.lang.String {
      return entity.Description
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 245, column 122
    function value_114 () : java.lang.String {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", entity.Fields.Count)
    }
    
    property get entity () : gw.acc.npg.wizard.OtherEntityStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.OtherEntityStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NPGWizardSummary_accScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 118, column 43
    function valueRoot_48 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 118, column 43
    function value_47 () : java.lang.String {
      return coverable.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 122, column 44
    function value_50 () : java.lang.String {
      return coverable.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 126, column 46
    function value_53 () : java.lang.String {
      return coverable.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=ReferredFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 130, column 45
    function value_56 () : java.lang.String {
      return coverable.ReferredFrom
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToLocation_Cell) at NPGWizardSummary_accScreen.pcf: line 134, column 51
    function value_59 () : java.lang.Boolean {
      return coverable.AttachedToLocation
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToBuilding_Cell) at NPGWizardSummary_accScreen.pcf: line 138, column 51
    function value_62 () : java.lang.Boolean {
      return coverable.AttachedToBuilding
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeConditions_Cell) at NPGWizardSummary_accScreen.pcf: line 143, column 50
    function value_65 () : java.lang.Boolean {
      return coverable.IncludeConditions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeExclusions_Cell) at NPGWizardSummary_accScreen.pcf: line 148, column 50
    function value_68 () : java.lang.Boolean {
      return coverable.IncludeExclusions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeModifiers_Cell) at NPGWizardSummary_accScreen.pcf: line 153, column 49
    function value_71 () : java.lang.Boolean {
      return coverable.IncludeModifiers
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 157, column 125
    function value_74 () : java.lang.String {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", coverable.Fields.Count)
    }
    
    property get coverable () : gw.acc.npg.wizard.CoverableStepDTO {
      return getIteratedValue(1) as gw.acc.npg.wizard.CoverableStepDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGWizardSummary_accScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGWizardSummary_accScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ValidateBtn) at NPGWizardSummary_accScreen.pcf: line 31, column 90
    function action_4 () : void {
      wizardDataUtil.isValid()
    }
    
    // 'initialValue' attribute on Variable at NPGWizardSummary_accScreen.pcf: line 13, column 52
    function initialValue_0 () : gw.acc.npg.wizard.ProductInfoStepDTO {
      return wizardDataUtil.getProductInfoStepDTO()
    }
    
    // 'initialValue' attribute on Variable at NPGWizardSummary_accScreen.pcf: line 17, column 52
    function initialValue_1 () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return wizardDataUtil.getCoverableStepDTOs().toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at NPGWizardSummary_accScreen.pcf: line 21, column 47
    function initialValue_2 () : gw.acc.npg.wizard.CostStepDTO[] {
      return wizardDataUtil.getCostsStepDTOs().toTypedArray()
    }
    
    // 'initialValue' attribute on Variable at NPGWizardSummary_accScreen.pcf: line 25, column 54
    function initialValue_3 () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return wizardDataUtil.getOtherEntitiesStepDTOs().toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 236, column 40
    function sortValue_105 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : java.lang.Object {
      return entity.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 241, column 41
    function sortValue_106 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : java.lang.Object {
      return entity.Description
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 245, column 122
    function sortValue_107 (entity :  gw.acc.npg.wizard.OtherEntityStepDTO) : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", entity.Fields.Count)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 118, column 43
    function sortValue_37 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 122, column 44
    function sortValue_38 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 126, column 46
    function sortValue_39 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=ReferredFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 130, column 45
    function sortValue_40 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.ReferredFrom
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToLocation_Cell) at NPGWizardSummary_accScreen.pcf: line 134, column 51
    function sortValue_41 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.AttachedToLocation
    }
    
    // 'value' attribute on CheckBoxCell (id=AttachedToBuilding_Cell) at NPGWizardSummary_accScreen.pcf: line 138, column 51
    function sortValue_42 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.AttachedToBuilding
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeConditions_Cell) at NPGWizardSummary_accScreen.pcf: line 143, column 50
    function sortValue_43 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeConditions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeExclusions_Cell) at NPGWizardSummary_accScreen.pcf: line 148, column 50
    function sortValue_44 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeExclusions
    }
    
    // 'value' attribute on CheckBoxCell (id=IncludeModifiers_Cell) at NPGWizardSummary_accScreen.pcf: line 153, column 49
    function sortValue_45 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return coverable.IncludeModifiers
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 157, column 125
    function sortValue_46 (coverable :  gw.acc.npg.wizard.CoverableStepDTO) : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", coverable.Fields.Count)
    }
    
    // 'value' attribute on TextCell (id=EntityName_Cell) at NPGWizardSummary_accScreen.pcf: line 182, column 38
    function sortValue_77 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.EntityName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NPGWizardSummary_accScreen.pcf: line 187, column 39
    function sortValue_78 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=ReferencedFrom_Cell) at NPGWizardSummary_accScreen.pcf: line 192, column 41
    function sortValue_79 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.ReferenceName
    }
    
    // 'value' attribute on TextCell (id=CoverableName_Cell) at NPGWizardSummary_accScreen.pcf: line 197, column 41
    function sortValue_80 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=CoverageName_Cell) at NPGWizardSummary_accScreen.pcf: line 202, column 40
    function sortValue_81 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.CoverageName
    }
    
    // 'value' attribute on TextCell (id=ParentCost_Cell) at NPGWizardSummary_accScreen.pcf: line 207, column 38
    function sortValue_82 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return cost.ParentCost
    }
    
    // 'value' attribute on TextCell (id=Fields_Cell) at NPGWizardSummary_accScreen.pcf: line 211, column 120
    function sortValue_83 (cost :  gw.acc.npg.wizard.CostStepDTO) : java.lang.Object {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", cost.Fields.Count)
    }
    
    // 'value' attribute on TextInput (id=PackageName_Input) at NPGWizardSummary_accScreen.pcf: line 42, column 44
    function valueRoot_6 () : java.lang.Object {
      return productInfo
    }
    
    // 'value' attribute on RowIterator (id=CostIterator) at NPGWizardSummary_accScreen.pcf: line 176, column 53
    function value_104 () : gw.acc.npg.wizard.CostStepDTO[] {
      return costsArray
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at NPGWizardSummary_accScreen.pcf: line 52, column 44
    function value_11 () : java.lang.String {
      return productInfo.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=EntityIterator) at NPGWizardSummary_accScreen.pcf: line 230, column 60
    function value_116 () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return entitiesArray
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at NPGWizardSummary_accScreen.pcf: line 57, column 52
    function value_14 () : java.lang.String {
      return productInfo.ProductAbbreviation
    }
    
    // 'value' attribute on TextInput (id=EntitySuffix_Input) at NPGWizardSummary_accScreen.pcf: line 62, column 52
    function value_17 () : java.lang.String {
      return productInfo.ProductEntitySuffix
    }
    
    // 'value' attribute on TextInput (id=LineCode_Input) at NPGWizardSummary_accScreen.pcf: line 70, column 41
    function value_20 () : java.lang.String {
      return productInfo.LineCode
    }
    
    // 'value' attribute on TextInput (id=LineEntityName_Input) at NPGWizardSummary_accScreen.pcf: line 75, column 47
    function value_23 () : java.lang.String {
      return productInfo.LineEntityName
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeConditions_Input) at NPGWizardSummary_accScreen.pcf: line 80, column 54
    function value_26 () : java.lang.Boolean {
      return productInfo.LineIncludeConditions
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeExclusions_Input) at NPGWizardSummary_accScreen.pcf: line 85, column 54
    function value_29 () : java.lang.Boolean {
      return productInfo.LineIncludeExclusions
    }
    
    // 'value' attribute on CheckBoxInput (id=LineIncludeModifiers_Input) at NPGWizardSummary_accScreen.pcf: line 90, column 53
    function value_32 () : java.lang.Boolean {
      return productInfo.LineIncludeModifiers
    }
    
    // 'value' attribute on TextInput (id=Fields_Input) at NPGWizardSummary_accScreen.pcf: line 95, column 125
    function value_35 () : java.lang.String {
      return DisplayKey.get("Accelerator.NPG.Web.Wizard.Fields.Form.FieldsCount", productInfo.Fields.Count)
    }
    
    // 'value' attribute on TextInput (id=PackageName_Input) at NPGWizardSummary_accScreen.pcf: line 42, column 44
    function value_5 () : java.lang.String {
      return productInfo.PackageName
    }
    
    // 'value' attribute on RowIterator (id=CoverableIterator) at NPGWizardSummary_accScreen.pcf: line 113, column 58
    function value_76 () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return coverablesArray
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at NPGWizardSummary_accScreen.pcf: line 47, column 51
    function value_8 () : java.lang.String {
      return productInfo.ProductDisplayName
    }
    
    property get costsArray () : gw.acc.npg.wizard.CostStepDTO[] {
      return getVariableValue("costsArray", 0) as gw.acc.npg.wizard.CostStepDTO[]
    }
    
    property set costsArray ($arg :  gw.acc.npg.wizard.CostStepDTO[]) {
      setVariableValue("costsArray", 0, $arg)
    }
    
    property get coverablesArray () : gw.acc.npg.wizard.CoverableStepDTO[] {
      return getVariableValue("coverablesArray", 0) as gw.acc.npg.wizard.CoverableStepDTO[]
    }
    
    property set coverablesArray ($arg :  gw.acc.npg.wizard.CoverableStepDTO[]) {
      setVariableValue("coverablesArray", 0, $arg)
    }
    
    property get entitiesArray () : gw.acc.npg.wizard.OtherEntityStepDTO[] {
      return getVariableValue("entitiesArray", 0) as gw.acc.npg.wizard.OtherEntityStepDTO[]
    }
    
    property set entitiesArray ($arg :  gw.acc.npg.wizard.OtherEntityStepDTO[]) {
      setVariableValue("entitiesArray", 0, $arg)
    }
    
    property get productInfo () : gw.acc.npg.wizard.ProductInfoStepDTO {
      return getVariableValue("productInfo", 0) as gw.acc.npg.wizard.ProductInfoStepDTO
    }
    
    property set productInfo ($arg :  gw.acc.npg.wizard.ProductInfoStepDTO) {
      setVariableValue("productInfo", 0, $arg)
    }
    
    property get wizardDataUtil () : gw.acc.npg.wizard.WizardProductLineCreator {
      return getRequireValue("wizardDataUtil", 0) as gw.acc.npg.wizard.WizardProductLineCreator
    }
    
    property set wizardDataUtil ($arg :  gw.acc.npg.wizard.WizardProductLineCreator) {
      setRequireValue("wizardDataUtil", 0, $arg)
    }
    
    
  }
  
  
}