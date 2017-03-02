var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models');
var Teacher = require('./models');
var Student = require('./models');
var Class = require('./models');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TEACHERS
app.get('/api/teachers', function (req, res) {
  Teacher.find({}, function (err, teacher) {
    if (err) return console.error(err);
    res.send(teacher);
  })
})

app.get('/api/teachers/:id', function (req, res) {
  var id = req.params.id;
  Teacher.find(id, function (err, teacher) {
    if (err) return console.error(err);
    res.send(teacher[id])
  });
});

app.post('/api/teachers', function (req, res) {
  //lists information for every teacher
  var name = req.body.name;
  var email = req.body.email;
  console.log(req.body.name, '++++++++++++++++++++++++++++++++');
  console.log(req.body.email)
  var teacher = new Teacher({
    name: name,
    email: email
  })
  teacher.save(function (err) {
    if (err) return console.error(err);
  });
  res.send(teacher)
  //console.log(req.body);
  //res.send('this works');
})

//STUDENTS
app.get('/api/students', function (req, res) {
  Student.find({}, function (err, student) {
    if (err) return console.error(err);
    res.send(student);
  })
})

app.get('/api/students/:id', function (req, res) {
  //get one student
  var id = req.params.id;
  Student.find(id, function (err, student) {
    if (err) return console.error(err);
    res.send(student[id])
  });
});

app.post('/api/students', function (req, res) {
  console.log('in students');
  var name = req.body.name;
  var email = req.body.email;
  var student = new Student({
    name: name,
    email: email
  })
  student.save(function (err) {
    if (err) return console.error(err);
  });
  res.send(student)
})

//CLASSES
app.get('/api/classes', function (req, res) {
  Class.find({}, function (err, classes) {
    if (err) return console.error(err);
    res.send(classes);
  })
})

app.get('/api/classes/:id', function (req, res) {
  var id = req.params.id;
  Class.find(id, function (err, classes) {
    if (err) return console.error(err);
    res.send(classes[id])
  });
});

app.post('/api/classes', function (req, res) {
  var code = req.body.code;
  var name = req.body.name;
  var classes = new Class({
    code: code,
    name: name
  })
  classes.save(function (err) {
    if (err) return console.error(err);
  });
  res.send(classes)
})


app.listen(8000, function () {
  console.log('server is listening on port 8000')
})

