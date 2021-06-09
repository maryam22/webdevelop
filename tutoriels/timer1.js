window.onload = function(){
var seconds = 00;
var tens = 00;
var minuts =00;
var minutsShow = document.getElementById("minuts")
var secondsShow = document.getElementById("seconds");
var tensShow =document.getElementById("tens");  
var start  =document.getElementById("button-start");
var stop  =document.getElementById("button-stop");
var reset  =document.getElementById("button-reset");

   
var Interval ;

start.onclick = function(){

  clearInterval(Interval);

  Interval = setInterval(startTimer, 10);

  }
 stop.onclick = function(){

  clearInterval(Interval);

 } 
reset.onclick = function(){

    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minuts = "00";
    tensShow.innerHTML = tens;
    secondsShow.innerHTML = seconds;
    minutsShow.innerHTML = minuts;

}


}

function startTimer(){

    tens++
    if(tens<100){
        console.log(tens)
        tensShow.innerHTML = tens;

    }
    if(tens>100){
        console.log(tens)
        tens=0;
        seconds++
        tensShow.innerHTML = tens;
        minutsShow.innerHTML = minuts;
    }   

   
    if(seconds<60){
        console.log(seconds)
        secondsShow.innerHTML=seconds;
        tensShow.innerHTML = tens;

    }
    if (seconds>60) {
        
        minuts++
        minutsShow.innerHTML =minuts;
        secondsShow.innerHTML=seconds;
        tensShow.innerHTML = tens;
       
    }

}


