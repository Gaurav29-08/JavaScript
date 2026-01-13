let number = 15;
let isPrime = true;
for(let i=2;i<number;i++){
  if(number%i==0){
    isPrime = false;
    break;
  }


}

if(isPrime){
  console.log("prime");
  
}
else {
  console.log("not a prime no");
  
}