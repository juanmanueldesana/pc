package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditDVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditDVPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditDVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditDVPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'columns' attribute on Layout at DocumentDetailsEditDVPanelSet.pcf: line 16, column 23
    function columns_0 () : java.lang.Double {
      return documentDetailsApplicationHelper.AllowFieldsSubset ? 2 : 1
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDVPanelSet.pcf: line 19, column 89
    function def_onEnter_1 (def :  pcf.DocumentMetadataInputSet_LossHistory) : void {
      def.onEnter(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDVPanelSet.pcf: line 19, column 89
    function def_onEnter_3 (def :  pcf.DocumentMetadataInputSet_default) : void {
      def.onEnter(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDVPanelSet.pcf: line 19, column 89
    function def_refreshVariables_2 (def :  pcf.DocumentMetadataInputSet_LossHistory) : void {
      def.refreshVariables(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDVPanelSet.pcf: line 19, column 89
    function def_refreshVariables_4 (def :  pcf.DocumentMetadataInputSet_default) : void {
      def.refreshVariables(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'mode' attribute on InputSetRef at DocumentDetailsEditDVPanelSet.pcf: line 19, column 89
    function mode_5 () : java.lang.Object {
      return (documentDetailsApplicationHelper as gw.api.web.document.DocumentMetadataPCHelper).PCFMode
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}