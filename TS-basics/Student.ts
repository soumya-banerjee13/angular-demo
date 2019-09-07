import {Teacher} from "./Teacher"

class Student {
    getTeacher() {
        var teacher = new Teacher("VR",60);
        teacher.printTeacher();
    }
}

var obj = new Student();
obj.getTeacher();