package gw.rating.startup

uses gw.api.system.PCConfigParameters
uses gw.api.system.PCDependenciesGateway
uses gw.api.system.PCLoggerCategory
uses gw.rating.CostDataWithOverrideSupport
uses gw.rating.flow.RatingFunctionSource
uses gw.rating.rtm.util.ProductModelUtils

uses java.text.SimpleDateFormat

@Export
public final class RatebookPrimer {
  /**
   * This function is invoked during PolicyCenter startup.
   * To disable ratebook preloading, change RateBookPreloadEnabled parameter in config.
   * Removing this function will result in PolicyCenter not being able to start.
   */
   public static function prime() {
     final var log = PCLoggerCategory.RTM

     if (PCConfigParameters.RatingModuleOn()) {
       log.info("Preloading all ratebooks")
       RTMLoadActions.primeForAllRateBooks()

       // This is to speed up rate routine editing. Don't do this on systems where configuration of rate
       // routine definitions is not habitual, i.e., consider before enabling on production systems...
       // noinspection HiddenPackageReference
       if (PCDependenciesGateway.ServerMode.Dev) {
         RTMLoadActions.primeCachesForAllParameterSets()
       }

       var startTime = Date.Now
       final var dateFmt = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss")
       loadPrimeCostSubtypes()
       loadPrimeRatingSources()
       log.info("Finished preloading cost subtypes and rating sources that started ${dateFmt.format(startTime)}")
     } else {
       log.info("Rating module is turned off, skipping rating preload.")
     }
   }

  private static function loadPrimeRatingSources() {
    ProductModelUtils
        .getAllPolicyLines()
        .forEach(\policyLine -> RatingFunctionSource.getFunctionSourcesForLine(policyLine))
  }

  private static function loadPrimeCostSubtypes() : void {
    /* There is an expensive call to: CostDataWithOverrideSupport which loads all the subtypes and caches the result.
    * Unfortunately, there is no exposed method for initializing this.  Instead, load the subtypes so that they will
    * likely get cached on the class-loader and make subsequent calls a little bit faster.
    */
    var primeCostSubtypes = CostDataWithOverrideSupport.Type.Subtypes
  }
}
