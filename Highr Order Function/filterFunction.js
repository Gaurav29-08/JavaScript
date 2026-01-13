let numbers = [2,5,-7,-9,3,88,-93];

const negative = numbers.filter(negativeNumber);

function negativeNumber(num){
 return num<0;


}
console.log(negative);


