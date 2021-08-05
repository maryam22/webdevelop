const API_URL ="https://api.github.com/users"
const searchBox = document.querySelector('input')
const findBtn = document.querySelector('a')
const output = document.querySelector('.output')



async function getRepo(username){

    let response = await fetch(`${API_URL}/${username}/repos`)
    let data = response.json();
    return data

}



findBtn.addEventListener('click',e=>{
   e.preventDefault();
   if(searchBox.value  !=""){      
    console.log("hello")
    getRepo(searchBox.value)
    .then(repos=>{

        console.log(repos.length)
        output.innerHTML = `${repos.length} repositories`
    })


   }

})

