'use strict';


angular.module('effortlogApp')
  .controller('EffortCtrl', function ($scope, $location, effortService, goalService, taskService) {
    var formatTime = function(hour, minute) {
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      return hour + ':' + minute;
    };
    var formatDate = function(date) {
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      return year + '-' + month + '-' + day;
    };
    var startTime = new Date();
    var endTime = new Date(startTime.getTime() + 5*60000);

    $scope.start = formatTime(startTime.getHours(), startTime.getMinutes());
    $scope.end = formatTime(endTime.getHours(), endTime.getMinutes());
    $scope.date = new Date();

    $scope.goToToday = function() {
      $location.search({date: formatDate(new Date())});
    };

    $scope.goToNextDate = function() {
      var nextDate = new Date($scope.date.getTime());
      nextDate.setDate($scope.date.getDate()+1);
      $location.search({date: formatDate(nextDate)});
    };

    $scope.goToPrevioustDate = function() {
      var previousDate = new Date($scope.date.getTime());
      previousDate.setDate($scope.date.getDate()-1);
      $location.search({date: formatDate(previousDate)});
    };

    function readUrl(dateString) {
      if (dateString === undefined) {
        return;
      }
      $scope.date = new Date(dateString);
      $scope.fetchEfforts();
    }
    $scope.$watch(function() { return $location.search().date; }, readUrl);

    // Load goals
    $scope.goals = goalService.getGoals();
    $scope.getGoalByMnemonic = function(mnemonic) {
      return goalService.getGoalByMnemonic(mnemonic);
    };

    // Load tasks
    $scope.tasks = taskService.getTasks();
    $scope.getTaskByMnemonic = function(mnemonic) {
      return taskService.getTaskByMnemonic(mnemonic);
    };

    $scope.fetchEfforts = function() {
      $scope.efforts = effortService.getEfforts($scope.date);
    };
    $scope.fetchEfforts();
    $scope.addEffort = function() {
      var effort= {
        start:    $scope.start,
        end:      $scope.end,
        goal:     $scope.goal,
        task:     $scope.task,
        comment:  $scope.comment
      };
      effortService.addEffort(effort, $scope.date);
      $scope.fetchEfforts();
    };
    $scope.deleteEffort = function(effort) {
      effortService.deleteEffort(effort, $scope.date);
    };
    $scope.editEffort = function(effort) {
      $scope.edit = effort;
    };
    $scope.saveToLocalStorage = function() {
      effortService.saveToLocalStorage();
    };
    $scope.loadFromLocalStorage = function() {
      effortService.loadFromLocalStorage();
      $scope.fetchEfforts();
    };
    $scope.isAddDisabled = function() {
      return $scope.newEffort.$invalid || $scope.start >= $scope.end;
    };
    $scope.startPattern = /^\d\d:\d\d$/;
    $scope.endPattern = /^(?!00:00)(\d\d:\d\d)$/;


    // Check for changes on efforts in localStorage
    var handleStorage= function(e) {
      if (!e) { e = window.event; }
      // Check if i can use apply in other places too
      if (e.key === 'ls.efforts') {
        $scope.$apply(function(){ $scope.loadFromLocalStorage(); });
      }
    };

    // Localstorage When the setItem(), removeItem(), and clear() methods are invoked, events are fired on the Window objects of other Documents that can access the newly stored or removed data, as defined in the sections on the sessionStorage and localStorage attributes.
    if (window.addEventListener) {
      window.addEventListener('storage', handleStorage, false);
    } else {
      window.attachEvent('onstorage', handleStorage);
    }

  }
  ).value('ui.config', {
    select2: {
      allowClear: true,
      width: 'resolve'
    },
    date: {
      autoSize: true,
      dateFormat: 'yy-mm-dd'
    },
    jq: {
      tooltip: { delay: 500 }
    }
  });
