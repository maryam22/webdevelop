"use strict"
let numbers =[1,2,3,4,5,6,7,8,9,10]


function avarage(num){
let i =0
let sum=0

for(i=0;i<num.length;i++){
    
  sum += num[i]
  
  
}
console.log(i)
let result = sum/num.length
console.log(result.toFixed(2))
return result

}

avarage(numbers);
console.log(avarage(numbers).toFixed(2))