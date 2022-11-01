package gw.lob.trv.contact

enhancement PolicyTravelerEnhancement : PolicyTraveler {

  function initializeTraveler(){
    var traveler = this.AccountContactRole as Traveler
    traveler.IsForeigner = false
    traveler.HasChronicDisease = false
    traveler.HasPreExisteningDisease = false
    traveler.HasHealthInsurance = false
  }


}
