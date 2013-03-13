'use strict';

describe('Service: effortService', function () {

  // load the service's module
  beforeEach(module('effortlogApp'));

  // instantiate service
  var effortService;
  beforeEach(inject(function (_effortService_) {
    effortService = _effortService_;
  }));

  it('should do something', function () {
    expect(!!effortService).toBe(true);
  });

});
