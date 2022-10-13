package gw.plugin.federateddata

uses entity.Activity
uses gw.api.web.desktop.data.account.AccountDTO
uses gw.api.web.desktop.data.activity.ActivityDTO
uses gw.api.web.desktop.data.submission.SubmissionDTO

@Export
class FederatedDataEntitySerializerUtil {
  private construct() {
  }

  static function createActivityMessage(messageContext : MessageContext) {
    var activity = messageContext.Root as Activity
    messageContext.createMessage(ActivityDTO.from(activity).writeAsJSONString())
  }

  static function createJobMessage(messageContext : MessageContext) {
    var job = (messageContext.Root as PolicyPeriod).Job
    if(job typeis Submission) {
      messageContext.createMessage(SubmissionDTO.from(job).writeAsJSONString())
    }
  }

  static function createAccountMessage(messageContext : MessageContext) {
    var account = (messageContext.Root as Account)
    messageContext.createMessage(AccountDTO.from(account).writeAsJSONString())
  }
}