'use strict';


angular.module('effortlogApp')
  .controller('EffortCtrl', function ($scope, effortService, goalService, taskService) {
    var formatTime = function(hour, minute) {
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      return hour + ':' + minute;
    };
    var startTime = new Date();
    var endTime = new Date(startTime.getTime() + 5*60000);

    $scope.start = formatTime(startTime.getHours(), startTime.getMinutes());
    $scope.end = formatTime(endTime.getHours(), endTime.getMinutes());

    $scope.goals = goalService.getGoals();

    $scope.tasks = taskService.getTasks();

    $scope.efforts = effortService.getEfforts();
    $scope.addEffort = function() {
      var effort= {
        start:    $scope.start,
        end:      $scope.end,
        goal:     $scope.goal,
        task:     $scope.task,
        comment:  $scope.comment
      };
      effortService.addEffort(effort);
    };
    $scope.deleteEffort = function(effort) {
      effortService.deleteEffort(effort);
    };
    $scope.editEffort = function(effort) {
      $scope.edit = effort;
    };
    $scope.saveToLocalStorage = function() {
      effortService.saveToLocalStorage();
    };
    $scope.loadFromLocalStorage = function() {
      $scope.efforts = effortService.loadFromLocalStorage();
    };
    $scope.isAddDisabled = function() {
      return $scope.newEffort.$invalid || $scope.start >= $scope.end;
    };
    $scope.startPattern = /^\d\d:\d\d$/;
    $scope.endPattern = /^(?!00:00)(\d\d:\d\d)$/;
  }
  ).value('ui.config', {
    select2: {
      allowClear: true,
      width: 'resolve'
    }
  });

