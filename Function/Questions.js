//IIFE
// function main(){
//   return (function(){
//     console.log("Hello User");
    
//   })();
// }

// const result = main();


//Question 2 
// var x = 10; //global variable 
// //IIFE runs immediately and doesnt have its own value so it looks up the scope chain and finds the global x = 10;
// (function(){
//   console.log(x);
  
// })();


var counter = (function (){
  var count = 0;
  return {
    increment : function(){
      count++;
    },
    getCount : function(){
      return count;
    },
  };
}) ();
counter.increment();
counter.increment();
console.log(counter.getCount());
