'use strict';

angular.module('mean.chart').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('chart example page', {
      url: '/chart/example',
      templateUrl: 'chart/views/index.html'
    });
  }
]);
