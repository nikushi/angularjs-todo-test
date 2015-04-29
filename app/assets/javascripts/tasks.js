angular.module('todoApp', [])
  .controller('TasksController', function() {
    var tasksCtrl = this;
    tasksCtrl.tasks = [
      {title:'learn angular', done:true},
      {title:'build an angular app', done:false}];
 
    tasksCtrl.addTask = function() {
      tasksCtrl.tasks.push({title:tasksCtrl.taskTitle, done:false});
      tasksCtrl.taskTitle = '';
    };
 
  });
