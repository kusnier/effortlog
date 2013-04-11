'use strict';

describe('Directive: timepicker', function () {
  beforeEach(module('effortlogApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<timepicker></timepicker>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the timepicker directive');
  }));
});
