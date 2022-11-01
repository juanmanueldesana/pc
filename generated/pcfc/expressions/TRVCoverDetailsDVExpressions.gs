package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TRVCoverDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/TRVCoverDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TRVCoverDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get item () : TRVCover {
      return getRequireValue("item", 0) as TRVCover
    }
    
    property set item ($arg :  TRVCover) {
      setRequireValue("item", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : TRVLine {
      return getRequireValue("line", 0) as TRVLine
    }
    
    property set line ($arg :  TRVLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}