package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/PolicyLineSummaryPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_TRVLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/PolicyLineSummaryPanelSet.TRVLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.TRVLine.pcf: line 17, column 23
    function initialValue_0 () : TRVLine {
      return line as TRVLine
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get trvline () : TRVLine {
      return getVariableValue("trvline", 0) as TRVLine
    }
    
    property set trvline ($arg :  TRVLine) {
      setVariableValue("trvline", 0, $arg)
    }
    
    
  }
  
  
}