package gw.plugin.federateddata

uses entity.Activity
uses gw.api.system.PCConfigParameters
uses gw.api.system.PCLoggerCategory
uses gw.plugin.Plugins
uses gw.plugin.messaging.MessageTransport
uses org.apache.http.client.HttpResponseException

@Export
class FederatedDataTransport implements MessageTransport {

  var _logger = PCLoggerCategory.FEDERATED_DATA_PLUGIN

  override function send(message : Message, transformedPayload : String) {
    if (!Enabled) {
      _logger.debug("Plugin called but disabled")
      return
    }

    var plugin = Plugins.get(IFederatedDataPlugin)
    var entity = message.MessageRoot

    try {
      if (entity typeis Activity) {
        switch (message.EventName) {
          case Activity.ACTIVITYADDED_EVENT:
            plugin.createActivity(entity.AssignedUser.PublicID, transformedPayload)
            break;
          case Activity.ACTIVITYCHANGED_EVENT:
            plugin.updateActivity(entity.AssignedUser.PublicID, entity.PublicID, transformedPayload)
            break;
          case Activity.ACTIVITYREMOVED_EVENT:
            plugin.deleteActivity(entity.AssignedUser.PublicID, entity.PublicID)
            break;
        }
      } else if (entity typeis Account) {
        switch (message.EventName) {
          case Account.ACCOUNTADDED_EVENT:
            plugin.createAccount(entity.CreateUser.PublicID, transformedPayload)
            break;
          case Account.ACCOUNTCHANGED_EVENT:
            plugin.updateAccount(entity.CreateUser.PublicID, entity.PublicID, transformedPayload)
            break;
          case Account.ACCOUNTREMOVED_EVENT:
            plugin.deleteAccount(entity.CreateUser.PublicID, entity.PublicID)
            break;
        }
      } else if (entity typeis PolicyPeriod) {
        switch (message.EventName) {
          case PolicyPeriod.POLICYPERIODADDED_EVENT:
            plugin.createSubmission(entity.CreateUser.PublicID, transformedPayload)
            break;
          case PolicyPeriod.BINDSUBMISSION_EVENT:
          case PolicyPeriod.ISSUEPERIOD_EVENT:
          case PolicyPeriod.CANCELPERIOD_EVENT:
            plugin.updateSubmission(entity.CreateUser.PublicID, entity.PublicID, transformedPayload)
            break;
          //TODO - SFS-84 implement delete submission
        }
      }
      message.reportAck()
    } catch (re : HttpResponseException) {
      message.ErrorDescription = re.LocalizedMessage
      _logger.debug("Error occured while sending message to Federated Data Service. Status code: " + re.StatusCode, re)
      message.reportError()
    } catch (e : Exception) {
      message.ErrorDescription = e.LocalizedMessage
      _logger.debug("Exception occured while sending message to Federated Data Service", e)
      message.reportError()
    }
  }

  override function shutdown() {
  }

  override function suspend() {
  }

  override function resume() {
  }

  override property set DestinationID(destinationID : int) {
  }

  static property get Enabled() : boolean {
    return PCConfigParameters.EnableFederatedData.Value
  }

}