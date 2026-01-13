let number = 11;
let count = 0;
for(let i=1;i<=number;i++){
  if(number%i===0){
    count++;
  
  }
}

if(count>2){
  console.log("not a prime ");
  
  


} else{
  console.log("prime number ");
  
}