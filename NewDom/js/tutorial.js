const cardColumns = document.querySelector(".card-columns")
console.log(cardColumns)

let h1 =document.createElement('h1');
h1.textContent ="ITECBRUSSEL"
console.log(cardColumns.childNodes)

cardColumns.insertBefore(h1,cardColumns.childNodes[1])