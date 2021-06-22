//DomContentLoded
let title=document.querySelector("#title")
const cardcolumns = document.querySelector('.card-columns').firstElementChild 

let users=[
   {
       id:1,
       user:'root',
       pass:'root123'

   },
   {
    id:2,
    user:'root',
    pass:'root123'
   },
   {
    id:3,
    user:'root',
    pass:'root123'
   }

]

document.addEventListener('DOMContentLoaded',()=>console.log('hello'))
document.addEventListener('DOMContentLoaded',()=>{console.log(users)})
document.querySelectorAll('.card').forEach(card=>{console.log(card)

       title.addEventListener('focus',function(e){console.log('hello')
    
        console.log(e.target)
        e.target.classList.add('text-warning')
        e.target.classList.add("bg-dark")
    
    })

})

title.addEventListener('blur',function(event){console.log('this is blur event')

   event.target.classList.remove("bg-dark")
   event.target.classList.remove("text-warning")
   event.target.classList.add("bg-light")
   event.target.classList.add("text-dark")

})

title.addEventListener('select',function(event){
    console.log("hello this is select")
    console.log(cardcolumns)
    cardcolumns.childNodes[3].childNodes[3].textContent = event.target.value
})

title.addEventListener('copy',function(e){
    console.log('copied')
     
})