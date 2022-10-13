package gw.job

uses gw.api.intentionallogging.ILElementIdentifier
uses gw.api.intentionallogging.ILElementSource
uses gw.api.intentionallogging.ILElementsRegistrationProcess
uses gw.api.system.PCLoggingMarker

/**
 * This is a class for providing manual ILElements (or to be more precise, definition of how to create them) related to
 * various job processes. These elements will be created and registered at the server startup.
 */
@Export
class JobILElementSource implements ILElementSource {

  public static final var ABSTRACT_JOB_PROCESS : ILElementIdentifier = ILElementIdentifier.of(ILElementType.TC_JOB, "AbstractJobProcess")
  public static final var ISSUANCE_PROCESS : ILElementIdentifier = ILElementIdentifier.of(ILElementType.TC_JOB, "IssuanceProcess")
  public static final var SUBMISSION_PROCESS : ILElementIdentifier = ILElementIdentifier.of(ILElementType.TC_JOB, "SubmissionProcess")

  override function onRegistration(registrationProcess : ILElementsRegistrationProcess) {
    registrationProcess.register(ABSTRACT_JOB_PROCESS, PCLoggingMarker.JOB_PROCESS);
    registrationProcess.register(ISSUANCE_PROCESS, PCLoggingMarker.ISSUANCE_PROCESS);
    registrationProcess.register(SUBMISSION_PROCESS, PCLoggingMarker.SUBMISSION_PROCESS);
  }
}