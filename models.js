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

   var teacher = new Teacher({
       name: 'Ella', 
       email: 'yahho.com'})
       
    console.log(teacher, 'after new Teacher')
    console.log(teacher.name, 'teacher name');

    teacher.save(function (err) {
    if (err) return console.error(err);
   });


Teacher.findOne({name: 'Ella'},function(err, teacher){
  if (err) return console.error(err);
  console.log(teacher, 'found this teacher');
})

module.exports = Teacher;
            
