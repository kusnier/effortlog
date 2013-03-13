'use strict';

angular.module('effortlogApp')
  .factory('taskService', function () {
    // Service logic

    var tasks = [
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

    // Public API here
    return {
      getTasks: function () {
        return tasks;
      }
    };
  });
