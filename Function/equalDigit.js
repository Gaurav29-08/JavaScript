function commonDigit(num1,num2){
  let answer;

  function countDigit(num){
    let count = 0;
    while(num>0){
      num = Math.floor(num/10);
      count++;
    }
    return count;

  }
  let digit1 = countDigit(num1);
let digit2 = countDigit(num2);

answer = (digit1===digit2);
return answer;


}


let finalAnswer =commonDigit(34556,9876);
console.log(finalAnswer);

