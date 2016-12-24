var student = require('./student');
var teacher = require('./teacher');

//teacher.add('cott');

function add(teachername, students) {

    teacher.add(teachername);
    students.forEach(function(item, index){
        student.add(item)
    })
}

exports.add = add;