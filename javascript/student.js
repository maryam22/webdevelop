students =[
    {username:"mary"
     ,scores:[]
    },
    {username:"mary1"
     ,scores:[]
    },
    {username:"mary2"
    ,scores:[]
   },
   {username:"mary3"
   ,scores:[]
  }
]

for(let i = 0;i<students.length;i++){
 //console.log(students[i])
 //students[i].scores.push(i);
 //console.log(students[i])
 var b = "email:mary@be.com"
 students[i].email = b
 //console.log(students[i])
}

//days = totaltime/3600/24
// hours =(totaltime/3600)%24
// mins =(totaltime/60)%60
//secounds totaltime % 60


//console.log(totaltime/3600/24)
//let day =totaltime/3600/24
//const dateObject = new Date(day)

//const humandateformat = day.toLocaleString();


let i = 0;
setInterval(function() {
    i++
   // console.log("hello")
},1000)

const unixTimestamp = 48885319

const millisecond= 51068657 * 1000 // 1575909015000

const dateObject = new Date(millisecond)

const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
//console.log(humanDateFormat)





var timestamp = 1622453827
var date = new Date(timestamp);
console.log(date.getTime())
console.log(date)
var ts = Math.round((date).getTime() / 1000);
console.log(1622453827)
var d=1622453827;
function cleanDate(d) {return new Date(+d.replace(/\/Date\((\d+)\)\//, '$1'));}
var d = new Date(4658870500000);
console.log(d)

// 

//console.log(current_date)
//console.log(new_date)

//while(current_date == new_date ){
         
    //let end_date = new Date("01 Jun 2021 00:00:00 GMT")/1000;


// setInterval(function time(new_date,current_date) {
   //setInterval(function time(end_date ) {

    let current_date = new Date()/1000;
        end_date = new Date("01 Jun 2021 00:00:00 GMT")/1000;
    let totaltime =end_date - current_date;
    let unix_timestamp = totaltime

    if (totaltime <= 0) {
        clearInterval(refreshId);
    }
    else{
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        console.log(formattedTime);
    }
 },1000) 

