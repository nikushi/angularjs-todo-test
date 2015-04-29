angular.module('todoApp', [])
  .controller('TasksController', ['$scope', '$http', function($scope, $http) {
    var tasksCtrl = this;

    tasksCtrl.indexurl = '/tasks.json';

    $http({method: 'GET', url: tasksCtrl.indexurl}).success(function(data, status) {
      tasksCtrl.tasks = data;
    });

    tasksCtrl.addTask = function() {
      tasksCtrl.error = '';

      var newTask = {title:tasksCtrl.taskTitle, done:false}
      // Note: XSRF-TOKEN is set in the cookie by server side, check out app/controllers/application_controller.rb. $http sets XSRF-TOKEN from cookie by default, so you don't need to set CSRF token manually.
      // ref: http://stackoverflow.com/questions/14734243/rails-csrf-protection-angular-js-protect-from-forgery-makes-me-to-log-out-on
      $http.post(tasksCtrl.indexurl, {authenticity_token: 'dummy', task: newTask}).success(function() {
        tasksCtrl.tasks.push(newTask);
      }).error(function(data, status) {
        tasksCtrl.error = "Error: " + status;
      });
      tasksCtrl.taskTitle = '';
    };

  }]);
