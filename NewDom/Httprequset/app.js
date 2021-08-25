const api_url ="http://localhost:4444/students";
const [get,post,delet,update] = document.querySelectorAll('button');
const [fullname,mail] = document.querySelectorAll('input');


//get http reqest
get.addEventListener('click',e=>{
 
fetch(api_url)
.then(res => res.json())
.then(data => {
    console.log(data)
 }) 
})


// //get request

fetch(api_url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

// //post HTTP REQUEST

post.addEventListener('click', e => {
    e.preventDefault();
    let newStudant = {
        name: fullname.value,
        email:mail.value

    }
    console.log(newStudant)
   fetch(api_url,{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(newStudant)
   })
   .then(response =>{

    console.log(response)
   })

})

//delete http


delet.addEventListener('click',e=>{
  e.preventDefault();
  fetch(`${api_url}/4`,{
      method:'DELETE'})
  .then(res=>{console.log(res)})

})


update.addEventListener('click',e=>{
   e.preventDefault();
   let newREcord={
      
    name: fullname.value,
    email:mail.value


   }
   fetch(`${api_url}/3`,{
    method:'PUT',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(newREcord)


   }).then(res=>console.log(res))


})


// fetch(api_url,{
//    method:'POST',
//    headers:{'Content-type':'application/json'},
//    body:JSON.stringify(newStudant)

// })
// .then(response =>{
//   console.log(response)
// })

//



// let newStudent =  {

//   name:'maryam',
//   email:"maryam@BarProp.be"

// }

// fetch(api_url,{
//     method:'post',
//       headers:{'Content-type':'application/jason'}
//        body:
    
    
//     })