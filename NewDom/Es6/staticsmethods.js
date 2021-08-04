// class Student {
//     constructor(name) {

//         this.name = name;

//     }
//     static addStudent(name) {

//         return name;
//     }

//     printIt(){


//         console.log(Student.addStudent(this.name))
//     }


//     static show() {

//         console.log(`heloo ${this.name}`)
//     }
//     static show1(name) {

//         console.log(`heloo ${name}`)
//     }

// }

// const st1 = new Student('Joemary');
// st1.show();


class Person{
constructor(name){

  this.name =name


}

//utility method
static getName(name){
    return name
}
print() {
    console.log(Person.getName(this.name))
}

}


const person1 = new Person("jos Dal")
person1.print();


//chilld class
class Childclass extends Person{

}

const ne =new Childclass();


console.log(Childclass.getName("this is childclass"))