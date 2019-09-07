let obj = {
    x:12,
    y:30,
    func: ()=> {
            
            console.log(this);
        
    }
}
obj.func();
export class Teacher {
    
    
    experience: number;
    constructor(private name: string,private age: number,experience?: number) {
        this.experience = experience;
    }
    printTeacher() {
        console.log(this.name,this.age,this.experience);
    }
}
var teacher = new Teacher("VR",60,20);
teacher.printTeacher();