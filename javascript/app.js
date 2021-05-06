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

let myObject = {

  name :"maryam",
  Family : "Barzeh",
  born :"Teheran",
  YearsIn : "10",
  study :"IT",
  LiveIn :"Brussels"

}

console.log("I am ",myObject.name,myObject.Family,".born in",myObject.born,"I have lived in",myObject.LiveIn,"for",myObject.YearsIn,".I studied",myObject.study);
