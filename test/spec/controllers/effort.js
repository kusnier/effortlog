'use strict';

describe('Controller: EffortCtrl', function () {

  // load the controller's module
  beforeEach(module('effortlogApp'));

  var EffortCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    EffortCtrl = $controller('EffortCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
