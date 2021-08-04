let printService = str =>{
  return new Promise((resolve,reject)=>{

   console.log(str);
   resolve(str);

  })
}

printService('inrecbrussel')
.then(res=>{
    printService("intec-1")


})
