'use strict';

/**
 * @ngdoc directive
 * @name transcripticApp.directive:txProtocol
 * @description
 * # txProtocol
 */
angular.module('transcripticApp')
  .directive('txProtocol', function (Run, Project) {
    return {
      templateUrl: 'views/tx-protocol.html',
      restrict: 'E',
      scope: {
        protocol: '='
      }
    };
  });
