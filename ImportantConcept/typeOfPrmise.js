//promise.all

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p1 sucess")
//   },3000)
// });
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // reject("p2 reject")
//     resolve("p2 resolve")
//   },1000)
// });
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p3 sucess")
//   },2000)
// });

// Promise.all([p1,p2,p3]).then((res)=>{
//   console.log(res);
  
// })




//promise.allSetteld

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p1 sucess")
//   },3000)
// });
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("p2 reject")
//     // resolve("p2 sucess")
//   },1000)
// });
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p3 sucess")
//   },2000)
// });

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//   console.log(res);
  
// })


//promise.race


const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("p1 sucess")
  },3000)
});
const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("p2 reject")
    // resolve("p2 sucess")
  },1000)
});
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("p3 sucess")
  },2000)
});

Promise.race([p1,p2,p3]).then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.error(err)
})


//promise.any


// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve("p1 sucess")
//      reject("p1 reject")
//   },3000)
// });
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("p2 reject")
//     // resolve("p2 sucess")
//   },1000)
// });
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve("p3 sucess")
//     reject("p3 reject")
//   },2000)
// });

// Promise.any([p1,p2,p3]).then((res)=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.error(err);
  
// })

