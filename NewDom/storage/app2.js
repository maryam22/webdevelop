const inputKey = document.querySelector("#inputKey")
const inputValue = document.querySelector("#inputValue")
const getValueFromStorage =document.querySelector("#getValueFromStorage")
 const insertDatetostorage = document.querySelector("#buttonInsert")
 const getDataFromStorage = document.querySelector("#getDataFromStorage")
 const getDataByKey = document.querySelector("#getDataByKey")


insertDatetostorage.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("heloo")
    console.log(inputKey.value)
    console.log(inputValue.value)
    sessionStorage.setItem(inputKey.value, inputValue.value)
    console.log("here")

})


getDataFromStorage.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < sessionStorage.length; i++) {

        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key)
        console.log(`${key}\n${value}`)

    }
})
getDataByKey.addEventListener('click',function(e){
   e.preventDefault();
   console.log(`testing`)
   console.log(getValueFromStorage.value)
   let value = sessionStorage.getItem(getValueFromStorage.value)
  console.log(value)

})



// const[inputKey,inputValue,getValueFromStorage] = document.querySelectorAll('input')
// const[buttonInsert,getDataFromStorage,getDataByKey] = document.querySelectorAll('button')
// console.log(inputKey,inputValue,getValueFromStorage)



// let elements = ['element1','element2','element3']
// const[firstElement,SecondElement,ThirdElement] = elements
// console.log(firstElement)

let singlLi =`<li class="list-group-item disable">Disable Item</li>`
let template =document.createRange().createContextualFragment(singlLi)
console.log(template.childNodes[0])
template.childNodes[0].textContent = "IntecBrussel"
document.querySelector('.')