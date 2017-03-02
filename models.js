var promise = require('promise');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rest');

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


//Teacher is tablename
var Teacher = mongoose.model('Teacher', teacherSchema);


Teacher.findOne({name: 'Harry'},function(err, teacher){
  if (err) return console.error(err);
  console.log(teacher, 'found this teacher');
})
            
