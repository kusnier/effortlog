'use strict';

angular.module('effortlogApp')
  .factory('goalService', function () {
    // Service logic

    var goals = [
      {name: 'Customer 1', description: 'Customer 1 in Berlin.', mnemonic: 'cst1', url: 'https://customer1.example.com'},
      {name: 'Customer 2', description: 'Customer 2 in Bern.', mnemonic: 'cst2', url: 'https://customer2.example.com'},
      {name: 'Customer 3', description: 'Customer 3 in Lublin.', mnemonic: 'cst3', url: 'https://customer3.example.com'},
      {name: 'Customer X', description: 'Customer x in Berlin.', mnemonic: 'cstx', url: 'https://customerx.example.com'},
      {name: 'Customer Y', description: 'Customer y in Bern.', mnemonic: 'csty', url: 'https://customery.example.com'},
      {name: 'Customer Z', description: 'Customer z in Lublin.', mnemonic: 'cstz', url: 'https://customerz.example.com'},
      {name: 'Project X', description: 'X', mnemonic: 'projectx'},
      {name: 'Project Y', description: 'Y', mnemonic: 'projecty'},
      {name: 'Project Z', description: 'Z', mnemonic: 'projectz'},
    ];

    // Public API here
    return {
      getGoals: function () {
        return goals;
      },
      getGoalByMnemonic: function(mnemonic) {
        for (var idx = goals.length - 1; idx >= 0; idx--) {
          var goal= goals[idx];
          if (goal.mnemonic === mnemonic) {
            return goal;
          }
        }
      }
    };
  });
