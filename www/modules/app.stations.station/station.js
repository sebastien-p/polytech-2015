(function (module) {
  'use strict';

  function config($stateProvider) {
    $stateProvider.state('stations.station', {
      url: '/{stationId}',
      views: {
        '@': {
          templateUrl: 'modules/app.stations.station/station.html'/*,
          controller: 'stationsController as controller'*/
        }
      }
    });
  }

  module.config(['$stateProvider', config]);

}(angular.module('app.stations.station', [
  'app.stations'
])));
