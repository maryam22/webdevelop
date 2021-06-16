let todoInput = document.getElementById("todo")
let removeIcons = document.querySelectorAll('.fa-remove')
let removeTotal = document.querySelector('#clear-todos')
let removeli = document.querySelectorAll('.list-group-item')
let btn = document.querySelector("#btn");
var form = document.getElementById('todo-form');


//remove all Lis

function RemoveTotal(e) {
   removeli.forEach(e => {
      e.remove()
   })
}

removeTotal.addEventListener('click', RemoveTotal)

//remove one per one lis

function RemoveItem(e) {
   e.target.parentElement.parentElement.remove()
}

removeIcons.forEach(x => {
   console.log(x)

   x.addEventListener('click', RemoveItem)

})



//add Element part

btn.addEventListener('click', addlement)
function addlement(e) {
   e.preventDefault();
   let listGroup = document.querySelector('.list-group');
   let firstelement = todoInput.value
   let secondElement = document.getElementById("datepicker").value
   let newContent = document.createTextNode(firstelement + secondElement)
   //if our input is placeis empty
   if (firstelement === "" || firstelement === " " || firstelement === null) {

      const divPart = document.getElementById('alert1');
      divPart.innerText = "This is a alert-check it out!";
      divPart.className = "alert alert-warning"

   }
   //if our input is not placeis empty
   else {

      const divPart = document.getElementById('alert1');
      divPart.innerText = "This is a primary alert-check it out!";
      divPart.className = "alert alert-success"
      const newLi = document.createElement('li');
      newLi.className = 'list-group-item d-flex justify-content-between';
      newLi.appendChild(newContent)
      const newA = document.createElement("a");
      newA.setAttribute("href", "#")
      newA.className = 'delete-item'
      const a = newLi.appendChild(newA)
      const newI = document.createElement('i')
      newI.className = "fa fa-remove"
      newA.appendChild(newI)
      listGroup.insertBefore(newLi, listGroup.childNodes[0])
      removeli = document.querySelectorAll('.list-group-item')

   }

   //show alert for 3 seconds
   setTimeout(() => {
      const divPart = document.getElementById('alert1');
      divPart.innerText = "";
      divPart.className = "myClass";

   }, 3000);


}



// Adds a listener for the "submit" event.
// form.addEventListener('submit', function (e) {

//    e.preventDefault();

// });



// Get input element
let filterInput = document.getElementById('filter');
// Add event listener
filterInput.addEventListener('keyup', filterList);

function filterList() {
   // Get value of input

   let filterValue = document.getElementById('filter').value.toUpperCase();
   console.log("filtering list " + filterValue)
   // Get names ul
   let ul = document.getElementById('names');
   // Get lis from ul
   let liList = ul.querySelectorAll('li.list-group-item');
   // Loop through collection-item lis
   for (let i = 0; i < liList.length; i++) {
      let liInnertext = liList[i].innerText
      //let txtValue = liInnertext.textContent || liInnertext.innerText;
      // If matched
      if (liInnertext.toUpperCase().indexOf(filterValue) > -1) {
         console.log("changing display to 'block'")
         liList[i].classList.add('shown');
         liList[i].classList.remove('hidden');
      } else {
         liList[i].classList.add('hidden')
         liList[i].classList.remove('shown');
         console.log("changing display to ''")
      }

   }

}





