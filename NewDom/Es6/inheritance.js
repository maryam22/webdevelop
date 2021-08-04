//inheritance

//parent class

class Person {

   constructor(username){
    this.username= username

   }

   show(){

    console.log(`Hello ${this.username}`)

   }

}
//child class

class Student extends Person{
    constructor(username,portfolio){
    super(username)
    this.portfolio = portfolio

    }
    show(){
        
        console.log(`Hello ${this.username}ans my ${this.portfolio}`)


    }





}
class Teacher extends Person{
    constructor(username,Subject){
        super(username)
        this.Subject = Subject
    
        }


        show(){
        
            console.log(`Hello ${this.username}ans my ${this.Subject}`)
    
    
        }
    
}

const st1 = new Student("joe","movieCMS app");
st1.show();

const t1 = new Teacher("joe"," app");
t1.show();

const t2 = new Person("joe");
t2.show();