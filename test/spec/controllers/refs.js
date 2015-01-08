'use strict';

describe('Controller: RefsCtrl', function () {

  // load the controller's module
  beforeEach(module('transcripticApp'));

  var RefsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RefsCtrl = $controller('RefsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
