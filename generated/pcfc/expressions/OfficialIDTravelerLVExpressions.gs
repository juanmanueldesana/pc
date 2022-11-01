package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/trv/policy/OfficialIDTravelerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OfficialIDTravelerLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/OfficialIDTravelerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OfficialIDTravelerLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=DocumentType_Cell) at OfficialIDTravelerLV.pcf: line 26, column 47
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      CurrentTraveler.OfficialIDType = (__VALUE_TO_SET as typekey.OfficialIDType)
    }
    
    // 'value' attribute on TextCell (id=OfficialIDValue_Cell) at OfficialIDTravelerLV.pcf: line 32, column 41
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      CurrentTraveler.OfficialIDValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=DocumentType_Cell) at OfficialIDTravelerLV.pcf: line 26, column 47
    function valueRoot_4 () : java.lang.Object {
      return CurrentTraveler
    }
    
    // 'value' attribute on TypeKeyCell (id=DocumentType_Cell) at OfficialIDTravelerLV.pcf: line 26, column 47
    function value_2 () : typekey.OfficialIDType {
      return CurrentTraveler.OfficialIDType
    }
    
    // 'value' attribute on TextCell (id=OfficialIDValue_Cell) at OfficialIDTravelerLV.pcf: line 32, column 41
    function value_6 () : java.lang.String {
      return CurrentTraveler.OfficialIDValue
    }
    
    property get CurrentTraveler () : entity.OfficialID {
      return getIteratedValue(1) as entity.OfficialID
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/trv/policy/OfficialIDTravelerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OfficialIDTravelerLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=DocumentType_Cell) at OfficialIDTravelerLV.pcf: line 26, column 47
    function sortValue_0 (CurrentTraveler :  entity.OfficialID) : java.lang.Object {
      return CurrentTraveler.OfficialIDType
    }
    
    // 'value' attribute on TextCell (id=OfficialIDValue_Cell) at OfficialIDTravelerLV.pcf: line 32, column 41
    function sortValue_1 (CurrentTraveler :  entity.OfficialID) : java.lang.Object {
      return CurrentTraveler.OfficialIDValue
    }
    
    // 'toAdd' attribute on RowIterator at OfficialIDTravelerLV.pcf: line 19, column 39
    function toAdd_10 (CurrentTraveler :  entity.OfficialID) : void {
      aTraveler.addToOfficialIDs(CurrentTraveler)
    }
    
    // 'toRemove' attribute on RowIterator at OfficialIDTravelerLV.pcf: line 19, column 39
    function toRemove_11 (CurrentTraveler :  entity.OfficialID) : void {
      aTraveler.removeFromOfficialIDs(CurrentTraveler)
    }
    
    // 'value' attribute on RowIterator at OfficialIDTravelerLV.pcf: line 19, column 39
    function value_12 () : entity.OfficialID[] {
      return aTraveler.OfficialIDs
    }
    
    property get aTraveler () : Contact {
      return getRequireValue("aTraveler", 0) as Contact
    }
    
    property set aTraveler ($arg :  Contact) {
      setRequireValue("aTraveler", 0, $arg)
    }
    
    
  }
  
  
}