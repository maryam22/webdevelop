function getAllMoviesFromStorage(){
  let movies;
  if(localStorage.getItem('movies') === null){

    movies = []
  }else
  {

    movies = JSON.parse(localStorage.getItem('movies'))
  }
 console.log('data=>',movies)
 return movies;

}


function AddMovies(newMovies){

   let temp = getAllMoviesFromStorage(); 
  
   temp.push(newMovies)
   console.log(temp)
 //  let temp2 =
  // console.log(temp2)
   return localStorage.setItem('movies',JSON.stringify(temp))
}

AddMovies({id:1,title:'superman'})
AddMovies({id:1,title:'bruce lee'})