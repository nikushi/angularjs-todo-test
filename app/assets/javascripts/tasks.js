angular.module('todoApp', [])
  .controller('TasksController', ['$scope', '$http', function($scope, $http) {
    var tasksCtrl = this;

    tasksCtrl.indexurl = '/tasks.json';

    $http({method: 'GET', url: tasksCtrl.indexurl}).success(function(data, status) {
      tasksCtrl.tasks = data;
    });

    tasksCtrl.addTask = function() {
      tasksCtrl.tasks.push({title:tasksCtrl.taskTitle, done:false});
      tasksCtrl.taskTitle = '';
    };

  }]);
