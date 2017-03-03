//angular code
//controller classes
var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
//$scope.greet = 'hello world';
$scope.clickTeachers = function(){
  console.log('clicked');
$http.get('/api/teachers')
.then(function(results){
 $scope.students = null;
 $scope.teachers = results.data;
 })
}
$scope.clickStudents = function(){
$http.get('/api/students')
.then(function(results){
  $scope.teachers = null;
  $scope.students = results.data;
})
}
$http.get('/api/classes')
.then(function(results){
  $scope.classes = results.data;
 })
}]);






