document.addEventListener('DOMContentLoaded',sessionchecking)

function sessionchecking(){
    setTimeout(function() {
        
        if(typeof(Storage)!=='undefined')
        {
       
          if(sessionStorage.user !== null && sessionStorage.pass !== null){
     
          location.href = 'login.html'
     
          }else
          {
     
         location.href = 'register.html'  
     
          }
     
        }

    },  5000);
 

}