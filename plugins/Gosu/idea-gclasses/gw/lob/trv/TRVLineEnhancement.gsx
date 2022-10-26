package gw.lob.trv

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
}