let numbers = [2,3,4,5,6,7,8,9];
let sum = numbers.reduce((total,num,index)=>{
  console.log(total,num,index);
  

  return total+num;

},0);

console.log(sum);
