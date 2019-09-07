"use strict";
exports.__esModule = true;
var Teacher_1 = require("./Teacher");
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getTeacher = function () {
        var teacher = new Teacher_1.Teacher("VR", 60);
        teacher.printTeacher();
    };
    return Student;
}());
var obj = new Student();
obj.getTeacher();
