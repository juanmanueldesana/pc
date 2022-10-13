package gw.plugin.resolver

uses gw.api.system.PCConfigParameters
uses gw.api.system.PCLoggerCategory
uses gw.plugin.Plugins
uses gw.plugin.messaging.MessageTransport
uses org.apache.http.client.HttpResponseException

@Export
public class ResolverTransport implements MessageTransport {

  public static final var DEST_ID : int = 321

  var _logger = PCLoggerCategory.RESOLVER_PLUGIN

  override function send(message : Message, transformedPayload : String) {
    if (!Enabled) {
      _logger.debug("Plugin called but disabled")
      return
    }

    var plugin = Plugins.get(IResolverServicePlugin)

    try {
      if (message.EventName == Account.ACCOUNTADDED_EVENT) {
        _logger.trace("Account added: ${transformedPayload}")
        plugin.addAccount(transformedPayload)
      } else if (message.EventName == Policy.POLICYADDED_EVENT) {
        _logger.trace("Policy added: ${transformedPayload}")
        plugin.addPolicy(transformedPayload)
      } else if (message.EventName == PolicyPeriod.CREATEPERIOD_EVENT
          || message.EventName == PolicyPeriod.RENEWPERIOD_EVENT
          || message.EventName == PolicyPeriod.REWRITEPERIOD_EVENT) {
        _logger.trace("Policy period created: ${transformedPayload}")
        plugin.addPolicyPeriod(transformedPayload)
      }
      message.reportAck()
    } catch (re : HttpResponseException) {
      message.ErrorDescription = re.LocalizedMessage
      _logger.debug("Error occured while sending message to Resolver Service. Status code: " + re.StatusCode, re)
      message.reportError()
    } catch (e : Exception) {
      message.ErrorDescription = e.LocalizedMessage
      _logger.debug("Exception occured while sending message to Resolver Service", e)
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
    return PCConfigParameters.EnableShardResolver.Value
  }
}