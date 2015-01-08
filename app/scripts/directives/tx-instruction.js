'use strict';

/**
 * @ngdoc directive
 * @name transcripticApp.directive:txInstruction
 * @description
 * # txInstruction
 */
angular.module('transcripticApp')
  .directive('txInstruction', function () {
    return {
      templateUrl: 'views/tx-instruction.html',
      restrict: 'E',
      scope: {
        instruction: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
