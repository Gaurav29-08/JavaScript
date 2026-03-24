// we have global , function scope and local scope 



//++++++example of global scope ++++++

//  var exampleFun = function greet(){
//   console.log("hello Gaurav");
  
//  }
//  exampleFun();
 

// function a(){
//   c();
//     function c(){
//       console.log(b);
      
    
//   }
// }


// var  b = 10;
// a();



//  function a(){
//   var b = 10;
//   c();

//   function c(){
//     console.log(b);
    
//   }
//  }

//  a();



//+++syntex error
// let a = 100;
// let  a  = 10;
// console.log(a);

//type error
// const n = 1000;
// n = 9;

// console.log(n);


let a = 10;
{

  console.log(a);
  let a = 20;
  
}





