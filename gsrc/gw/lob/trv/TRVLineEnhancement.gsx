package gw.lob.trv

uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
uses typekey.AccountContactRole
uses typekey.PolicyContactRole

enhancement TRVLineEnhancement: entity.TRVLine {

  function createAndAddTRVCover(): TRVCover {
    var cbl = new TRVCover(this.Branch)
    this.addToTRVCovers(cbl)
    cbl.syncModifiers()
    cbl.syncCoverages()
    return cbl
  }

  function removeTRVCover(cbl: TRVCover) {
    this.removeFromTRVCovers( cbl )
  }


  function addNewPolicyTravelerOfContactType(contactType: typekey.ContactType) : PolicyTraveler {
    var acctContact = this.Branch.Policy.Account.addNewAccountContactOfType(contactType)
    acctContact.addNewRole( TC_TRAVELER )
    return addNewPolicyTravelerForContact(acctContact.Contact)
  }

  function addNewPolicyTravelerForContact(contact : Contact) : PolicyTraveler {
    if (this.PolicyTravelers.hasMatch(\elt1 -> elt1.AccountContactRole.AccountContact.Contact == contact)){
      throw new DisplayableException(DisplayKey.get(DisplayKey.get("Web.PolicyTraveler.Error.AlreadyExists"), contact))
    }

      var policyTraveler = this.Branch.addNewPolicyContactRoleForContact(contact, PolicyContactRole.TC_POLICYTRAVELER) as PolicyTraveler
    policyTraveler.initializeTraveler()
    this.addToPolicyTravelers(policyTraveler)
    return policyTraveler

  }

}