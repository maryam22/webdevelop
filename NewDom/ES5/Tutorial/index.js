// function Movie(id,title){

// console.log('hello')
// this.id =id;
// this.title =title;


// this.printMovie = function (){

//    console.log(`movie title is ${this.title}`)


// }
// }

// let movie1 = new Movie(1,'joker and Harley')

// //console.log(movie1)
// Movie.TestMethod = function(){



// }

// movie1.printMovie()

// let myNewObject = {
//   id:1,
//   user:'root',
//   print:function(){

//   console.log(this.user)
//   }

// }
// myNewObject.print();
// myNewObject.testProp = 'it works'
// console.log(myNewObject)

// function Todo(id, title, location) {

//     this.id = id;
//     this.title = title;
//     this.location;
//     this.date = new Date()
//     this.todos = []
//     this.addTodo = function () {
//         let todo = {
//             id: this.id,
//             title: this.title,
//             location: this.location,
//             date: this.date
//         }
        
//         return this.todos.push(todo)
//     }
//     this.printTodos = function(){

//      console.log(this.todos)
//      return this.todos

//     }
// }
// let tak1 = new Todo(1,'learn Javascript','intecBrussel');
// let tak2 = new Todo(2,'learn NodeJs','intecBrussel');
// tak1.addTodo()
// tak1.printTodos()

// tak2.addTodo()
// tak2.printTodos()

// function Todo(){
//     this.todos = []

//     this.addTodo =function(id,title,location,date){
//      let todo = {
//           id:id,
//           title:title,
//           location:location,
//           date:new Date()

//      }
     
//      return this.todos.push(todo)

//     }
//    this.showTodos( )
    
// }



 
 // checking the prototype value
 // { ... }


//  // constructor function
// // constructor function
// // constructor function
// function Person () {
//      this.name = 'John',
//      this.age = 23
//  }
 
//  // creating objects
//  const person1 = new Person();
//  const person2 = new Person();
 
//  // adding a method to the constructor function
//  Person.prototype.greet = function() {
//      console.log('hello' + ' ' +  this.name);
//  }
 
//  person1.greet(); // hello John
//  person2.greet(); // hello John

let students=[{name:'Student',scores:[10,20,30,50,40]},
              {name:'Student1',scores:[10,40,30,80,70]}
]

function getStudents(obj){
     const totalScores = obj.scores.reduce(
        function(perv,current,index){

            return perv+current
        }

     )
     console.log(totalScores)
     obj.totalScore = totalScores
     return obj

}

function whoPassed(obj){
    return obj.totalScore >= 130
}

let result =students.map(getStudents).filter(whoPassed).findIndex(function  )

console.log(result)