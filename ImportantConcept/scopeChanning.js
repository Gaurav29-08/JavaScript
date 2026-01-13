var a = 10;
let b = 20;
const c = 30;

function print(){
  var a = 'ten';
  let b = "twenty";

  console.log("**** Inside print function ****");
  console.log(a,b,c);
  console.log("**** *****");

  function innerPrint(){
    var a = 'inner10';
    console.log("*Inside innerPrint function");
    console.log(a,b,c);
    
    
  }
  innerPrint();
  
  
  
}

console.log(a,b,c);
print();
