'use strict';

describe('Service: goalService', function () {

  // load the service's module
  beforeEach(module('effortlogApp'));

  // instantiate service
  var goalService;
  beforeEach(inject(function (_goalService_) {
    goalService = _goalService_;
  }));

  it('should do something', function () {
    expect(!!goalService).toBe(true);
  });

});
