//angular code
//controller classes
var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
//$scope.greet = 'hello world';
$scope.showTeachers = false;
$scope.showStudents = false;
$scope.showClasses = false;

$scope.clickTeachers = function(){
  console.log('clicked');
$http.get('/api/teachers')
.then(function(results){
 $scope.teachers = results.data;
 $scope.showTeachers = true;
 $scope.showStudents = false;
 $scope.showClasses = false;
 })
}
$scope.clickStudents = function(){
 $http.get('/api/students')
 .then(function(results){
  $scope.students = results.data;
  $scope.showStudents = true;
  $scope.showTeachers = false;
  $scope.showClasses = false;
 })
}
$scope.clickClasses = function(){
console.log('clicked!')
$http.get('/api/classes')
.then(function(results){
  console.log(results, 'resuuuuuuults')
  $scope.classes = results.data;
  console.log(results.data, 'results daaaataa')
  $scope.showClasses = true;
  $scope.showTeachers = false; 
  $scope.showStudents = false;
 })
}
//not grapping inputs from client yet
//need param
$scope.createStudent = function(data){
  //var data = $.param({
  //name: $scope.name,
  //email:$scope.email,
  //classes:$scope.classes
  //});

  $http.post('/api/students')
  .then(function(data){
    console.log(data)
  })
 }

//$scope.createStudent = function(){
  //var data = $.param({
    //name: $scope.name,
    //email:$scope.email
  //});
//var config = {
  //headers : {
    //'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //}
 //}
//$http.post('/api/students', data, config)
  //.success(function(data, status, headers, config){
    //$scope.students = data;
 // })
//}

}]);






