var promise = require('promise');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected!!!!")
});

exports.default = db;

var teacherSchema = mongoose.Schema({
    name: 'String',
    email: 'String'
});
var studentSchema = mongoose.Schema({
    name: 'String',
    email: 'String'
});
var classSchema = mongoose.Schema({
    code: 'String',
    name: 'String'
});


//teachers is the tablename
var Teacher = mongoose.model('Teacher', teacherSchema, 'teachers');
//console.log(Teacher, 'Teacher in model')

module.exports = Teacher;
            
var Student = mongoose.model('Student', studentSchema, 'students');

module.exports = Student;

var Class = mongoose.model('Class', classSchema, 'classes');

module.exports = Class;