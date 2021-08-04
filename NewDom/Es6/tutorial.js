//callsback hell ES5


const user = {

  id :1,
  name:"joe de"

}

const friends = [{id:2,name:"joe"},{id:3,name:"bars"}]

const getUser=()=>{  


    return new Promise((resolve,reject)=>{

        resolve(user)
    })
}
const printFriends = id =>{
   return new Promise((resolve,reject)=>{resolve(friends)})

}

let id;
getUser().then(function (u){
 id= u.id
console.log(id)
printFriends(id).then(function(friends){console.log(friends)})

})
// Promise chain
getUser().then((res)=>{return printFriends(res.id)}).then(data =>{console.log(data)})











//getUser().then((res)=>{})



//Async-Await