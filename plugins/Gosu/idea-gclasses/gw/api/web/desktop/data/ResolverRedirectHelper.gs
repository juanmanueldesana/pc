package gw.api.web.desktop.data

uses gw.api.locale.DisplayKey
uses gw.api.system.PCConfigParameters
uses gw.api.system.PCLoggerCategory
uses gw.plugin.Plugins
uses gw.plugin.resolver.IResolverServicePlugin
uses org.apache.commons.lang3.StringUtils
uses pcf.Desktop
uses pcf.DesktopAccounts
uses pcf.DesktopActivities
uses pcf.MulticlusterAccount
uses pcf.MulticlusterActivity
uses pcf.MulticlusterJob
uses pcf.MulticlusterShard

@Export
class ResolverRedirectHelper {

  static var LOGGER = PCLoggerCategory.RESOLVER_PLUGIN

  static function getShardUrlForAccount(accountPublicId : String) : String {
    if (PCConfigParameters.MulticlusterShardUrlTemplate.getValue().Empty) {
      LOGGER.error("Could not do redirect as parameter ${PCConfigParameters.MulticlusterShardUrlTemplate.getName()} is not configured.")
      return null
    }

    try {
      var cluster = Plugins.get(IResolverServicePlugin).getClusterForAccount(accountPublicId)
      var shardUrl = StringUtils.replace(PCConfigParameters.MulticlusterShardUrlTemplate.getValue(), "SHARD-ID", cluster)
      return shardUrl
    } catch (ex : Exception) {
      LOGGER.error(DisplayKey.get("Web.ResolverService.Errors.UnknownShardUrl"), ex)
    }
    return null
  }

  static function accountForward(accountPublicId : String, accountNumber : String) {
    var shardUrl = gw.api.web.desktop.data.ResolverRedirectHelper.getShardUrlForAccount(accountPublicId)
    if (shardUrl != null) {
      MulticlusterAccount.push(shardUrl, accountNumber)
    } else {
      DesktopAccounts.push();
      throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ResolverService.Errors.UnknownShardUrl"))
    }
  }

  static function jobForward(accountPublicId : String, jobNumber : String) {
    var shardUrl = gw.api.web.desktop.data.ResolverRedirectHelper.getShardUrlForAccount(accountPublicId)
    if (shardUrl != null) {
      MulticlusterJob.push(shardUrl, jobNumber)
    } else {
      Desktop.push();
      throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ResolverService.Errors.UnknownShardUrl"))
    }
  }

  static function activityForward(accountPublicId : String, activityPublicId : String) {
    var shardUrl = gw.api.web.desktop.data.ResolverRedirectHelper.getShardUrlForAccount(accountPublicId)
    if (shardUrl != null) {
      MulticlusterActivity.push(shardUrl, activityPublicId)
    } else {
      DesktopActivities.push();
      throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ResolverService.Errors.UnknownShardUrl"))
    }
  }

  static function contactForward(accountPublicId : String) {
    var shardUrl = gw.api.web.desktop.data.ResolverRedirectHelper.getShardUrlForAccount(accountPublicId)
    if (shardUrl != null) {
      MulticlusterShard.push(shardUrl) //TODO - SFS-97
    } else {
      Desktop.push();
      throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ResolverService.Errors.UnknownShardUrl"))
    }
  }
}