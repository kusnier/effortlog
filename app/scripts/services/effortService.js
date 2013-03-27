'use strict';

angular.module('effortlogApp')
  .factory('effortService', function (localStorageService) {
    // Service logic

    var efforts= angular.fromJson(localStorageService.get('efforts'));
    if (efforts === null) {

      // Add sample efforts
      efforts = {
        '2013-03-24': [
          {id: uuid.v4(), start: '10:00', end: '11:00', goal: 'projectx', task: 'dev', comment: 'no' },
          {id: uuid.v4(), start: '11:00', end: '12:00', goal: 'projectx', task: 'bug', comment: '#12' },
          {id: uuid.v4(), start: '12:00', end: '13:00', goal: 'projectx', task: 'bug', comment: '#13' },
          {id: uuid.v4(), start: '13:00', end: '15:00', goal: 'projectx', task: 'bug', comment: '#14' }
        ],
        '2013-03-25': [
          {id: uuid.v4(), start: '10:00', end: '11:00', goal: 'projectx', task: 'dev', comment: 'next day no' },
          {id: uuid.v4(), start: '11:00', end: '12:00', goal: 'projectx', task: 'bug', comment: 'next day #12' },
          {id: uuid.v4(), start: '12:00', end: '13:00', goal: 'projectx', task: 'bug', comment: 'next day #13' },
          {id: uuid.v4(), start: '13:00', end: '15:00', goal: 'projectx', task: 'bug', comment: 'next day #14' }
        ]
      };
    }

    function getDateIndex(d) {
      function pad(n){return n<10 ? '0'+n : n;}
      return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate());
    }

    // Public API here
    return {
      getEfforts: function (date) {
        return efforts[getDateIndex(date)];
      },
      addEffort: function(effort, date) {
        var dateIndex= getDateIndex(date);
        effort.id= uuid.v4();
        if (!angular.isArray(efforts[dateIndex])) {
          efforts[dateIndex]= [];
        }
        efforts[dateIndex].push(effort);
        this.saveToLocalStorage();
      },
      deleteEffort: function(effort, date) {
        var dateIndex= getDateIndex(date);
        for (var idx = efforts[dateIndex].length - 1; idx >= 0; idx--) {
          if (efforts[dateIndex][idx] === effort) {
            efforts[dateIndex].splice(idx, 1);
            this.saveToLocalStorage();
            return;
          }
        }
        this.saveToLocalStorage();
      },
      saveToLocalStorage: function() {
        localStorageService.add('efforts', angular.toJson(efforts));
      },
      loadFromLocalStorage: function() {
        efforts= angular.fromJson(localStorageService.get('efforts'));
        return efforts;
      }
    };
  });
