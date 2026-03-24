const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("promise is resolved")
  },10000)
});


const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("promise is resolved")
  },5000)
});

async function  handalePromise(){

  console.log("hello Soni");

  const val1 = await p1;
  console.log("hello world 1");
  console.log(val1);
  
    const val2 = await p2;
  console.log("hello world 2");
  console.log(val2);
  
  

}


handalePromise();
