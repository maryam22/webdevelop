let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let students = ["mary","mm"]

console.log("output1")

for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];   
        console.log(element *100 )
    }

}

console.log("output3")

for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key]; 
         let num = element + element; 
        if (num<=10) {

            console.log(num);


        }
      
    }

}
console.log("output4")

        for (var x=0; x < numbers.length; x++) {
            if (x % 3 === 0 ) {
                console.log(x)
            }
        }    
 
console.log("output5")
for ( n of numbers.reverse()) {
    console.log(n);
}



const name = "mary"
    console.log(letter);
    
}


student = [
    { username : "Mary ",
      scours:[]},
    {username:"marmar",
     scours:[]}
    ]

for(let i =0; i<students.length;i++){

   console.log(students[i]);
   students[i].scours.push(i);

}