'use strict';


angular.module('effortlogApp')
  .controller('EffortCtrl', function ($scope) {
    $scope.goals = [
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

    $scope.tasks = [
      {name: 'Administration', description: '', mnemonic: 'admin'},
      {name: 'Bug', description: '', mnemonic: 'bug'},
      {name: 'Code Review', description: '', mnemonic: 'review'},
      {name: 'Concept', description: '', mnemonic: 'concept'},
      {name: 'Deployment', description: '', mnemonic: 'deploy'},
      {name: 'Design', description: '', mnemonic: 'design'},
      {name: 'Development', description: '', mnemonic: 'dev'},
      {name: 'Documentation', description: '', mnemonic: 'doc'},
      {name: 'E-Mail', description: '', mnemonic: 'email'},
      {name: 'Meeting', description: '', mnemonic: 'meet'},
      {name: 'Project Management', description: '', mnemonic: 'projecr'},
      {name: 'QA', description: 'Quality assurance', mnemonic: 'qa'},
      {name: 'Reseach', description: '', mnemonic: 'research'},
      {name: 'Stand-up', description: 'Stand-up meeting', mnemonic: 'standup'},
      {name: 'Travel', description: '', mnemonic: 'travel'},
    ];
    $scope.efforts = [
      {start: '10:00', end: '11:00', goal: 'projectx', task: 'dev', comment: "no" },
      {start: '11:00', end: '12:00', goal: 'projectx', task: 'bug', comment: "#12" },
      {start: '12:00', end: '13:00', goal: 'projectx', task: 'bug', comment: "#13" },
      {start: '13:00', end: '15:00', goal: 'projectx', task: 'bug', comment: "#14" }
    ];
  }
).value('ui.config', {
    select2: {
      allowClear: true,
      width: 'resolve'
    }
})
;

