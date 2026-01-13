// let  a = "Global";

// function outerPrint(){
//   let b = 'OuterPrint';

//   function innerPrint(){
//     let c = 'innerPrint';
//     return `${a}=> ${b} => ${c}`;
  
  
//   }
//   const show = innerPrint();
//   console.log(show);

// }
//   outerPrint();
  

// function x(){
//   var a = 8;
//   function y(){
//     console.log(a);
    
//   }
//   a = 100;
//   return y;

// }
// var z = x();
// console.log(z);
// z();

function cart(){
  let items = 0;
  return {
    addItem : function(){
      items++;
    },
    getItem : function (){
      return items;
    }
   };
}


const closure = cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());
