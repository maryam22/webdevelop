//function

function Student1(){
    this.name = 'Jack'

}


 Class Student{

   constructor(name,age){
    this.name = name;
    this.age = age;


   }

}

class Student {
    constructor(role = "visitor"){

        this.role = role;
    }
    showStudent(name,age){
        return `my name is ${name}age is${age}`

    }

}


let student2 = new Student();
consol.log(student2.showStudent("mary",23));
