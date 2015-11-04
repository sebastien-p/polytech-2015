(function (module) {
  'use strict';

  function config($stateProvider) {
    $stateProvider.state('stations', {
      url: '/stations',
      views: {
        '': {
          templateUrl: 'modules/app.stations/stations.html',
          controller: 'stationsController'
        }
      }
    });
  }

  module.config(['$stateProvider', config]);

}(angular.module('app.stations', [])));
