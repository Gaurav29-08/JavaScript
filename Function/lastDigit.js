function lastDigit(num1,num2){
  let answer;
  let last1 = num1%10;
  let last2 = num2%10;
  if(last1===last2){
    answer = true;
  }
   else {
    answer = false;
   }
   return answer;
}

console.log(lastDigit(16,126));
