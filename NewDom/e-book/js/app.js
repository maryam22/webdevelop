//general 
let btn =document.querySelector(".btn-primary")
let trash =document.querySelectorAll(".fa-trash")
let tbody = document.querySelector("tbody")
let btnForm =document.querySelector(".btn-outline-light")
let bookName = document.querySelector("#book_name")
let bookAuthor = document.querySelector("#book_author")
let bookCategory = document.querySelector("#book_category")
let bookDate = document.querySelector("#book_date")
let bookprice = document.querySelector("#price")

//remove all elements
function eBook(){
   this.books = []
   this.addElement=()=>{
   
    let book ={
     
        bookName:bookName.value,
        bookAuthor:bookAuthor.value,
        bookCategory:bookCategory.value,
        bookDate:bookDate.value,
        bookprice:bookprice.value

    }
    return this.books.push(book)
}

  this.show =()=>{
     this.books.forEach(book =>{console.log(book)})
}
  this.print =()=>{

    // make td,tr th
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    //Dom Element
    let template1 = document.createRange().createContextualFragment('<i class="fa fa-eur" aria-hidden="true"></i>')
    let template2 = document.createRange().createContextualFragment('<a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a>')
    console.log(template2)
   
    //appanded together
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    td6.appendChild(template2)
    td6.childNodes[0].addEventListener('click', RemoveItems)
    tr.appendChild(td6)


    

    //appanded text
    //let text = document.createTextNode(bookName.value)
    let i = 1
    var t=document.createTextNode(i++)
    th.appendChild(t)
    td1.appendChild(document.createTextNode(bookName.value))
    td2.appendChild(document.createTextNode(bookAuthor.value))
    td3.appendChild(document.createTextNode(bookCategory.value))
    td4.appendChild(document.createTextNode(bookDate.value))
    td5.appendChild(document.createTextNode(bookprice.value))
    //print e simbole after
    td5.appendChild(template1)
  
    tbody.append(tr)

    console.log(tr)


  }
}




btnForm.addEventListener('click',function(e){
      
    e.preventDefault();
    let newBook = new eBook();
    newBook.addElement();
   // eBook.print();
    newBook.show();
    newBook.print();
     
})
    


   




btn.addEventListener('click',function(){
tbody.remove();

})

//remove per element

function RemoveItems(e) {
    e.target.parentElement.parentElement.parentElement.remove()
 }
 trash.forEach(x => {
   // console.log(x)
 
    x.addEventListener('click', RemoveItems)
 
 })


 //Add Element

  
//     function addElement(e){
   
//     // make td,tr th
//     let tr = document.createElement("tr");
//     let th = document.createElement("th");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     let td5 = document.createElement("td");
//     let td6 = document.createElement("td");

//     //Dom Element
//     let template1 = document.createRange().createContextualFragment('<i class="fa fa-eur" aria-hidden="true"></i>')
//     let template2 = document.createRange().createContextualFragment('<a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a>')
//     console.log(template2)
   
//     //appanded together
//     tr.appendChild(th)
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     tr.appendChild(td5)
//     td6.appendChild(template2)
//     td6.childNodes[0].addEventListener('click', RemoveItems)
//     tr.appendChild(td6)


    

//     //appanded text
//     //let text = document.createTextNode(bookName.value)
//     var t=document.createTextNode(i++)
//     th.appendChild(t)
//     td1.appendChild(document.createTextNode(bookName.value))
//     td2.appendChild(document.createTextNode(bookAuthor.value))
//     td3.appendChild(document.createTextNode(bookCategory.value))
//     td4.appendChild(document.createTextNode(bookDate.value))
//     td5.appendChild(document.createTextNode(bookprice.value))
//     //print e simbole after
//     td5.appendChild(template1)
  
//     tbody.append(tr)

//     console.log(tr)
//     getAllTodosFromStorage();
   
    
// }

function getAllTodosFromStorage() {
    let todos;
    if (localStorage.getItem('todos') === null) { 
        todos = []
    } else {
        // here we have data in storage
        todos = JSON.parse(localStorage.getItem('todos')) 
    }
    console.log('DATA=>', todos)
    return todos;
}



function addTodo(newTodo) {
    let temp = getAllTodosFromStorage();

    temp.push(newTodo)
    console.log(temp)
    // console.log(newMovie)
    return localStorage.setItem('todos', JSON.stringify(temp))
}

// addMovie({ id: 1, title: 'superman' })
// addMovie({ id: 1, title: 'bruce lee' })
// addMovie({ id: 1, title: 'Batman' })


// document.querySelector('button').addEventListener('click',function(e){
//     e.preventDefault();
//     addTodo({ id: 1, title: 'Batman' })
    
// })
