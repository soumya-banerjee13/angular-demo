"use strict";
exports.__esModule = true;
var Teacher = /** @class */ (function () {
    function Teacher(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Teacher.prototype.printTeacher = function () {
        console.log(this.name, this.age, this.experience);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
var teacher = new Teacher("VR", 60, 20);
teacher.printTeacher();
