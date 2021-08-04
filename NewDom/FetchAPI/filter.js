const ApI_URL = "https://jsonplaceholder.typicode.com/posts"
const PostsContanier = document.querySelector('.posts');
const PostTitle = document.querySelector('#post-title');
const PostBody = document.querySelector(".post-body");





 


// <a href="#" data-toggle="modal" data-target="#postdetail" class="lead d-block">ffffffffffff</a>
function postTitleGen(objectData){
    
    let a = c('a')
    a.href="#"
    a.className="lead d-block"
    a.id= "post"
    a.setAttribute("data-toggle","modal")
    a.setAttribute('key',objectData.id)
    a.setAttribute("data-target","#postdetail")
    a.innerText = objectData.title
    PostsContanier.appendChild(a)


}




window.addEventListener('DOMContentLoaded',event=>{
   console.log('testing hello')
   fetch(ApI_URL)
   .then(response=>response.json())
   .then(data=>{
      data.forEach(post => {
      //console.log(post)//singel object
      postTitleGen(post)
   });  
   })
})

//postTitleGen({title:"intecBrussel"})

async function getSingelPost(id){

   let response  = await fetch(`${ApI_URL}/${id}`)
   let data = response.json()
   return data

}
// getSingelPost(5)
// .then(res=>{console.log(res)})

PostsContanier.addEventListener('click', e => {

   //console.log(e.target.getAttribute("key"))
   getSingelPost(e.target.getAttribute("key"))//post id
      .then(res => {
         console.log(res)

         PostTitle.innerHTML = res.title
         PostBody.innerHTML = res.body

      })
})

