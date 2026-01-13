let numbers = [2,3,4,5,6,7,8];
let double = numbers.map((num)=>{
  return num*num;

});

console.log(double);

const products = [
  {id : 1, name:"Laptop" , price:120000},
  {id : 2, name:"phone", price:30000},
  {id : 3, name:"headphone", price:1200},

];

const productNames = products.map((product)=>{

  return product.name;

});
console.log(productNames);

const productPrice = products.map((product)=>{
  return product.price;

})

console.log(productPrice);
const discountedProsuct = products.map((product)=>({
  ...product,
  discountedPrice : product.price*0.9,


}));

console.log(discountedProsuct);


