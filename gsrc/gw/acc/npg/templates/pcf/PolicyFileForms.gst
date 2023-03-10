<% uses gw.acc.npg.model.ProductLine %>
<%@ params(productLine: ProductLine) %>
<?xml version="1.0"?>
<PCF
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../../../../../../../pcf.xsd">
  <Page
    afterEnter="gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)"
    canVisit="perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails"
    id="${productLine.PolicyFileFormsName}"
    parent="PolicyFile(policyPeriod, asOfDate)"
    title="DisplayKey.get(&quot;Web.PolicyFile.Forms&quot;)">
    <LocationEntryPoint
      signature="${productLine.PolicyFileFormsName}(policyPeriod : PolicyPeriod, asOfDate : java.util.Date)"/>
    <Variable
      name="policyPeriod"
      type="PolicyPeriod"/>
    <Variable
      name="asOfDate"
      type="java.util.Date"/>
    <ScreenRef
      def="PolicyFile_PolicyLine_FormsScreen(policyPeriod, policyPeriod.${productLine.LineCode})"/>
  </Page>
</PCF>