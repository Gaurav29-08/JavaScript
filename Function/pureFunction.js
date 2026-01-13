// function sum(num1,num2){
//   return num1+num2;
// }



// console.log(sum(4,6));


let discount = 80;

//the output depends on the external variable 
function totalPrice(price){
  discount = 90;
  return price - discount;
}

console.log(totalPrice(800));
