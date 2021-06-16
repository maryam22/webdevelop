// let result;
// const cardBody = document.querySelectorAll('.card-body')[1]
// // result = cardBody.children[4]
// // result = cardBody.children[4]
// // result = cardBody.children[4].children[0]
// // cardBody.children[4].children[0].innerHTML = "Intecbrussel"


// // const findme = document.querySelector('.findme')
// // result = findme
// // //result = cardBody.children[4].children
// // result = findme.parentElement.parentElement.parentElement
// //result.innerHTML =('hello')


// const listoftodos = document.querySelectorAll('.list-group-item:nth-child(even)')
// listoftodos.forEach(function(li){

//    li.classList.add("bg-secondary")


// })
// const todolistbody = document.querySelector('.list-group')
 
// //todolistbody.innerHTML ='my titel'

// result = cardBody.firstElementChild
// result = cardBody.childElementCount
// result = cardBody.lastElementChild

// let singel_li= document.querySelector('li')
// result = singel_li.nextElementSibling
// let card = document.querySelector('.card').lastElementChild
// result = card.previousElementSibling
// console.log(result)

let div =document.createElement("div")
let result;
div.innerHTML = 'hello new div'
div.classList.add('jumbotron')
div.setAttribute('id',"container")
result = div.getAttribute("class")
result = div
let link = document.createElement('a') 
link.href = "https://google.be"
link.setAttribute('alt','googel ref link')
link.setAttribute("target","_blank")
link.innerHTML="click me"
result = link
console.log(result)


let li = document.createElement('li')
li.className = "list-group-item d-flex justify-content-between"
let a = document.createElement('a')
a.className = 'delete-item'
let i = document.createElement('i')
i.className = "fa fa-remove"
let title = document.createTextNode("this is new todo title")

a.appendChild(i)

li.appendChild(a)
li.appendChild(title)
console.log(li)

let g = (t)=>document.createElement(t)
let ul = g("ul")
let newli =g('li')
console.log(ul,newli)