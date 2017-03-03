var promise = require('promise');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost:27017/api');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err){
    console.log("connected to database!!!!")
});

exports.default = db;

var teacherSchema = mongoose.Schema({
    name: 'String',
    email: 'String'
});
var studentSchema = mongoose.Schema({
    name: 'String',
    email: 'String', 
    classes: [{type: ObjectId, ref: 'Class'}]
});
var classSchema = mongoose.Schema({
    code: 'String',
    name: 'String'
});



//teachers is the tablename
var Teacher = mongoose.model('Teacher', teacherSchema, 'teachers');
//console.log(Teacher, 'Teacher in model')
            
var Student = mongoose.model('Student', studentSchema, 'students');

var Class = mongoose.model('Class', classSchema, 'classes');

module.exports = {
    Teacher,
    Student, 
    Class
}