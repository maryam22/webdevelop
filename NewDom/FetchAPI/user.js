async function getAllUsers(){
  let res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json() 
}



function readUser(arr){

    arr.forEach(user => {
        //console.log(Comment)
        output.innerHTML +=`<p><a href="#">${user.name}</a></p>\n`
    });
}

document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault();
    getAllUsers()
    .then(res =>{
  
      //console.log(res)
      readUser(res)
    })
  
  
  })