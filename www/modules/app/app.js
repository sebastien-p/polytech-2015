(function (module) {
  'use strict';

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/stations');
  }

  module.config(['$urlRouterProvider', config]);

}(angular.module('app', [
  'ionic',
  'app.stations.station'
])));
