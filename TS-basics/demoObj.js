var _this = this;
var obj = {
    x: 12,
    y: 30,
    func: function () {
        console.log(_this);
    }
};
obj.func();
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
var teacher = new Teacher("VR", 60, 20);
teacher.printTeacher();
