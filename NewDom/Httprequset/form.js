const API_URL = "http://localhost:4444/formInfo"
const [get, put, delet, update] = document.querySelectorAll('button');
const [email, password] = document.querySelectorAll('input')

//   async function getFormInfo(){
//    const data =  await fetch(API_URL).json()
//    data.then(res=>res)
//    .then (data=>{console.log(data)})

//   }






get.addEventListener('click',e=>{
    e.preventDefault();
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
     }) 
    })
    
  
    
put.addEventListener('click', e => {
    e.preventDefault();
    let newuser = {

        email: email.value,
        password: password.value
    }
    console.log(newuser)
    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newuser)

    })

})


delet.addEventListener('click',e=>{
    e.preventDefault();

    fetch(`${API_URL}/3`,{
     method:'DELETE',
     headers: { 'Content-type': 'application/json' },
     body: JSON.stringify(newuser)
})
     .then(res=>res)
     .then(data=>console.log(data))
   

})

update.addEventListener('click',e=>{
    e.preventDefault();
    let updateData = {
        email:email.value,
        password:password.value
      }
      fetch(`${API_URL}/1`,{
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(updateData)
    
    
       }).then(res=>console.log(res))
    
    
    })
    