// fetch("https://jsonplaceholder.typicode.com/comments")
//    //
//  .then(res =>{return res.json()})
//  .then(data=>{console.log(data)})
let output=document.querySelector('#output')

 async function  getAllComments(){

   let res = await fetch("https://jsonplaceholder.typicode.com/comments");
   return res.json();

 }
//  getAllComments()
//  .then(res=>{console.log(res)
// })
// .catch(err=>console.log(err))

function readComment(arr){

    arr.forEach(Comment => {
        //console.log(Comment)
        output.innerHTML +=`<p>${Comment.name}</p>\n`
    });
}


document.querySelector('button').addEventListener('click',(e)=>{
  e.preventDefault();
  getAllComments()
  .then(res =>{

    //console.log(res)
    readComment(res)
  })


})
//  let res = await fetch("https://jsonplaceholder.typicode.com/comments");
//  return res.json();

// }

// getAllComments()
// .then(res=>{console.log(res)})
// .catch(err=>console.log(err))