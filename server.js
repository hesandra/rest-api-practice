var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//TEACHERS
app.get('/api/teachers', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  res.send('hello world');
})

app.get('/api/teachers/:id', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  res.send('this works');
})

app.post('/api/teachers', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  var name = req.body.name;
  var email = req.body.email;
    var teacher = new Teacher({name: name, email: email})
    console.log(teacher.name, 'teacher name');

    teacher.save(function (err, teacher) {
    if (err) return console.error(err);
   });
 res.send(teacher)


  //console.log(req.body);
  //res.send('this works');
})

//STUDENTS
app.get('/api/students', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  res.send('hello students');
})

app.get('/api/students/:id', function(){
    //get one student
   res.send('One student');
})

//CLASSES
app.get('/api/classes', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  res.send('hello classes');
})

app.get('/api/classes/:id', function(req, res){
  console.log('in teachers');
  //lists information for every teacher
  res.send('this class id');
})

app.post('/api/classes', function(req, res){
  console.log('in classes');
  //lists information for every teacher
  console.log(req.body);
  res.send('this works');
})


app.listen(8000, function(){
    console.log('server is listening on port 8000')
})

