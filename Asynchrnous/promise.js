const request = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve({firstName:"Gaurav",lastName : "Sirari"})
    // reject("Request has been rejected")
  }, 1000);

});

request.then((value)=>{
  console.log(value);
  
}).catch((err)=>{
  console.log(err);
  
}).finally(()=>{
  console.log("request completed");
  
})