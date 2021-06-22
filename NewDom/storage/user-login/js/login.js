// console.log(typeof sessionStorage.userData)
// console.log(JSON.parse(sessionStorage.userData))

const [username,password] =document.querySelectorAll('input');
const submitBtn = document.querySelector('button')
console.log(username,password)

submitBtn.addEventListener('click',checkAuth)





function checkAuth(event){

event.preventDefault();
console.log('testing')
if(typeof(Storage)!=='undefined')
{

if(sessionStorage.user == username.value && sessionStorage.pass == password.value)
{
   location.href='dashbord.html'

}else{

  alert('username or password incorect')

}
}}

