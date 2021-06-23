const containers = document.querySelectorAll('div')[1].childNodes[1].childNodes[9] //.childnodes[0]
console.log(containers)

//containers.textContent = "text";
//containers.setAttribute('test',222)


const listgroup = document.querySelector('list-group:nth-child(2)')//'.list-group >li:nth-child(3)'
//copy selector in elements(3)

const listgroup2 =document.getElementById('myList')
console.log(listgroup2)

const getElByClass = document.getElementsByClassName('list-group-item')
console.log(getElByClass[3])

const getElBytagName = document.getElementsByTagName('li')
getElBytagName[0].setAttribute('company','intecBrussel')
getElBytagName[0].getAttribute('company')
document.body.style.backgroundColor='black'
document.body.classList.add('bg-dark')

//createrange().creatContextuelFragment()

