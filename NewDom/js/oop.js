// function Movies(id,title){

// console.log('hello constructor')
// this.id = id;
// this.title= title;

// this.printMovie = function(){

// console.log(`movie title is",${this.title}`)

// }

// }



// let myNewObject ={
//    id:1,
//    user:'root',
//    print:function(){
//     console.log(this.user)

//    }

// }
// let movie1 = new Movies(1,"harly");
// console.log(movie1)
// movie1.printMovie();
// myNewObject.print();
// myNewObject.testProp = "it works"
// console.log(myNewObject)


// Movies.testMethod = function(){

//     console.log('hello function')
// }

// Movies.testMethod();

// function Todo(id,title,location,date,){

//      this.id = id;
//      this.title = title;
//      this.location = location;
//      this.date = new Date();
//      this.todos = []

//      this.addtodos = function(){
//         let todo = {
//           id:this.id,
//           title:this.title,
//           location:this.location,
//           date:this.date


//         }







//       this.todos.push(todo)
//       return this.todos
//      }

//     this.printTodos = function(){
//     console.log(this.todos)
//     return this.todos


//    }
// }

// let task1 = new Todo(1,'learn Javascript','intecbrussel');
// task1.addtodos();
// task1.printTodos();

let ListGroup = document.querySelector('.list-group');

function Todo() {
  this.todos = []

  this.addTodo = function (id, title, location) {
      let todo = {
          id: id,
          title: title,
          location: location,
          date: new Date()
      }
      return this.todos.push(todo)
  }

  this.showTodos = function () {
      console.log(this.todos)
      return this.todos
  }
  this.printTodo =function(){
    let LiElement = document.createRange().createContextualFragment( '<li class="list-group-item ">Active item</li>')
    console.log(LiElement)
    this.todos.forEach(todo=>{
      
      console.log(todo)
      LiElement.appendChild(document.createTextNode(todo.title))
      ListGroup.appendChild(LiElement)

      
      

  })
   
}
}
let todo = new Todo()
todo.addTodo(1,"intec","java")
todo.addTodo(2,"intec brussel","java")
todo.showTodos()
todo.printTodo();

  