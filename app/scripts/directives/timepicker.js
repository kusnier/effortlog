'use strict';

angular.module('effortlogApp')
  .directive('timepicker', function () {
    return {
      require: '?ngModel',
      restrict: 'A',
      link: function($scope, element, attrs, ngModelCtrl) {
        var originalRender, updateModel;
        updateModel = function(ev) {
          return $scope.$apply(function() {
            return ngModelCtrl.$setViewValue(ev.time.value);
          });
        };
        if (ngModelCtrl != null) {
          originalRender = ngModelCtrl.$render;
          ngModelCtrl.$render = function() {
            originalRender();
            if (ngModelCtrl.$viewValue != undefined) {
              $timeout( function() {element.timepicker('setTime', ngModelCtrl.$viewValue)}, 0 );
            }
            return ngModelCtrl.$viewValue;
          };
        }
        return attrs.$observe('bTimepicker', function(value) {
          var options;
          options = {};
          if (angular.isObject(value)) {
            options = value;
          }
          if (typeof(value) === "string" && value.length > 0) {
            options = angular.fromJson(value);
          }
          return element.timepicker(options).on('changeTime.timepicker', updateModel);
        });
      }
    };
  });
