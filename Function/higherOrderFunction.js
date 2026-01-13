let inputs = [5,3,7,9,3,8,2];

function operation(input, fn) {
  const output = [];
  for(let num of input){
    output.push(fn(num));
  }
  return output;

}

function square(number){
  return number*number;
}

function cube(number){
  return number*number*number;
}

console.log(operation(inputs,square));
