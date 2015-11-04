(function (module) {
  'use strict';

  function StationsController($scope, stationsService) {
    $scope.stations = [];

    stationsService.getStations().then(function (stations) {
      $scope.stations = stations;
    });

  }

  module.controller('stationsController', [
    '$scope',
    'stationsService',
    StationsController
  ]);

}(angular.module('app.stations')));
