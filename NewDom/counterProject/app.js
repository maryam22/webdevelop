document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',function(e){

    e.preventDefault();


    if(button.classList.contains('dec')){
        decreaseMethod()
        console.log("ggg")

    }
    if(button.classList.contains('inc')){

        invrementMethod()
        console.log("hh")
   
    }
    if(button.classList.contains('res')){
        
        resetmethod()
        console.log("bb")
   
    }   
    
  
    })
})

function invrementMethod(){

console.log('increaseeeeee')

}

function decreaseMethod(){

    console.log('decrease')
    
    }

function resetmethod(){

    console.log('rest')

}    