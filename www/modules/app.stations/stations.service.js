(function (module) {
  'use strict';

  var URL = 'http://www.metromobilite.fr/data/Carto/Statique/ListeDesStationsOMMS.json';

  function StationsService($http) {
    var service = this;

    service.getStations = function () {
      return $http.get(URL).then(function (response) {
        return response.data.zone.areas[0].stations;
      });
    };

  }

  module.service('stationsService', [
    '$http',
    StationsService
  ]);

}(angular.module('app.stations')));
