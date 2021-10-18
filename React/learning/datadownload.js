const fetch = require('node-fetch');
const fs = require('fs')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
    let result = JSON.stringify(data);
  //  console.log(data)
  //  console.log(result)
    fs.writeFile('news.json',result,function(err){
        if(err){
            console.log(err)
        }else{
            console.log('DATA is saved!!!')
        }
    })

})