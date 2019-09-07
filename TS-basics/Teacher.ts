export class Teacher {
    
    
    experience: number;
    constructor(private name: string,private age: number,experience?: number) {
        this.experience = experience;
    }
    printTeacher() {
        console.log(this.name,this.age,this.experience);
    }
}