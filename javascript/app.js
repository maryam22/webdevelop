console.log('hello nodjs')
var black = '0000';
console.log(black);
/*

time = (hour * 3600 + minute * 60 + second) / 3600

*/ 

function bruto(hour,  minute,  second){

  return  (hour*3600+minute*60+second)/3600
    
}

let thing = bruto(3,20,20);

console.log("Bruto"+thing);
/*
console.log("I am ",myObject.name,myObject.Family,".born in",
myObject.born,"I have lived in",myObject.LiveIn,"for",myObject.YearsIn,".I studied",
myObject.study,"birthday datum",myObject.birthdayENMonth.day,"/",myObject.birthdayENMonth.month);*/
//pass out side


let myObject = {

  name :"maryam",
  Family : "Barzeh",
  born :"Teheran",
  YearsIn : "10",
  study :"IT",
  LiveIn :"Brussels",
  birthdayENMonth: {
     day:21,
     month:09
  }

}

function personInfo(person){

   return (`Hello,I am ${person.name} ${person.Family}.born in ${person.born}. I have lived in ${person.LiveIn} for ${person.YearsIn}.I studied ${person.study}
  . My birthday datum ${person.birthdayENMonth.day} / ${person.birthdayENMonth.month}`)

}
let print = personInfo(myObject);

console.log(print);

//pass inside

let person1 = {
  name :"maryam",
  Family : "Barzeh",
  born :"Teheran",
  YearsIn : "10",
  
  printInfo:function(){

  console.log("hello")
  console.log(`I am ${person1.name} ${person1.Family}.born in ${person1.born}. I have lived in ${person1.LiveIn} for ${person1.YearsIn}.`)

  }


}
person1.printInfo();