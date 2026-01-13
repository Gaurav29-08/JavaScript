// let numbers  = [2,4,5,6,7,8,9,10];
// let double = numbers.map((num)=>{
//   return num*num;

// });
// console.log(double);

let products = [
  
    {id : 1, name:"laptop", price : 120000},
    {id : 2, name : "phone" , price : 40000},
    {id : 3, name: "earphone", price: 2000},
];

let productNames = products.map((product)=>{
  return product.name;
})

console.log(productNames);


