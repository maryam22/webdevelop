const [user, pass] = document.querySelectorAll('input');
let  registerBtn = document.querySelector('.registerBtn');
let present = document.querySelector('.present');

//console.log(user, pass, registerBtn)

function Register(){

   this.users = []
   this.add = ()=>{
       
   console.log(user.value,pass.value)
    let singeluser ={
      id:Math.random().toString(16).slice(2),
      user:user.value,
      pass:pass.value,
      regTime:new Date().getTime()/1000

    }
    //console.log(singeluser)
    return this.users.push(singeluser)
   }
 
   this.show = ()=>{
     this.users.forEach(user => {
       console.log(user)
      })
    }
    
    this.print =()=>{
    let generate = function(tagname){ return document.createElement(tagname)}
    let p = generate("p");
    let div =generate("div")
    p.textContent = user.value;
    console.log(p,div)
    let text=  div.appendChild(p);
    present.appendChild(text)

    }

    }
 

registerBtn.addEventListener('click',function(e){
     e.preventDefault();
     let user =new Register();
     user.add();
    //console.log( e.target)
    user.show();
    user.print()
 
});