package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/npg/NPGImport_accDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NPGImport_accDVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/npg/NPGImport_accDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NPGImport_accDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=Generate_Input) at NPGImport_accDV.pcf: line 36, column 89
    function action_21 () : void {
      lineOfBusinessProcessor.process()
    }
    
    // 'value' attribute on TextInput (id=LobSourcePackage_Input) at NPGImport_accDV.pcf: line 29, column 54
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      lineOfBusinessProcessor.PackageName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on FileInput (id=XmlFilePath_Input) at NPGImport_accDV.pcf: line 18, column 53
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      lineOfBusinessProcessor.WebXMLFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'value' attribute on TextInput (id=ConfigRoot_Input) at NPGImport_accDV.pcf: line 24, column 35
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      lineOfBusinessProcessor.ConfigDirectoryPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on FileInput (id=XmlFilePath_Input) at NPGImport_accDV.pcf: line 18, column 53
    function editable_1 () : java.lang.Boolean {
      return lineOfBusinessProcessor.Status != PROGRESS
    }
    
    // 'initialValue' attribute on Variable at NPGImport_accDV.pcf: line 10, column 50
    function initialValue_0 () : gw.acc.npg.LineOfBusinessProcessor {
      return new gw.acc.npg.LineOfBusinessProcessor()
    }
    
    // 'label' attribute on Label at NPGImport_accDV.pcf: line 31, column 57
    function label_19 () : java.lang.String {
      return lineOfBusinessProcessor.Status.Message
    }
    
    // 'value' attribute on FileInput (id=XmlFilePath_Input) at NPGImport_accDV.pcf: line 18, column 53
    function valueRoot_4 () : java.lang.Object {
      return lineOfBusinessProcessor
    }
    
    // 'value' attribute on TextInput (id=LobSourcePackage_Input) at NPGImport_accDV.pcf: line 29, column 54
    function value_14 () : java.lang.String {
      return lineOfBusinessProcessor.PackageName
    }
    
    // 'value' attribute on FileInput (id=XmlFilePath_Input) at NPGImport_accDV.pcf: line 18, column 53
    function value_2 () : gw.api.web.WebFile {
      return lineOfBusinessProcessor.WebXMLFile
    }
    
    // 'value' attribute on TextInput (id=ConfigRoot_Input) at NPGImport_accDV.pcf: line 24, column 35
    function value_8 () : java.lang.String {
      return lineOfBusinessProcessor.ConfigDirectoryPath
    }
    
    property get lineOfBusinessProcessor () : gw.acc.npg.LineOfBusinessProcessor {
      return getVariableValue("lineOfBusinessProcessor", 0) as gw.acc.npg.LineOfBusinessProcessor
    }
    
    property set lineOfBusinessProcessor ($arg :  gw.acc.npg.LineOfBusinessProcessor) {
      setVariableValue("lineOfBusinessProcessor", 0, $arg)
    }
    
    
  }
  
  
}