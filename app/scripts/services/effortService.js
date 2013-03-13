'use strict';

angular.module('effortlogApp')
  .factory('effortService', function () {
    // Service logic

    var efforts = [
      {id: uuid.v4(), start: '10:00', end: '11:00', goal: 'projectx', task: 'dev', comment: 'no' },
      {id: uuid.v4(), start: '11:00', end: '12:00', goal: 'projectx', task: 'bug', comment: '#12' },
      {id: uuid.v4(), start: '12:00', end: '13:00', goal: 'projectx', task: 'bug', comment: '#13' },
      {id: uuid.v4(), start: '13:00', end: '15:00', goal: 'projectx', task: 'bug', comment: '#14' }
    ];
    //efforts= angular.fromJson(window.localStorage.getItem('efforts'));

    // Public API here
    return {
      getEfforts: function () {
        return efforts;
      },
      addEffort: function(effort) {
        effort.id= uuid.v4();
        efforts.push(effort);
      },
      deleteEffort: function(effort) {
        for (var idx = efforts.length - 1; idx >= 0; idx--) {
          if (efforts[idx] === effort) {
            efforts.splice(idx, 1);
            return;
          }
        }
      },
      saveToLocalStorage: function() {
        window.localStorage.setItem('efforts', angular.toJson(efforts));
      },
      loadFromLocalStorage: function() {
        efforts= angular.fromJson(window.localStorage.getItem('efforts'));
        return efforts;
      }
    };
  });
