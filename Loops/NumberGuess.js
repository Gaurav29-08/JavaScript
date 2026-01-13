let randomNum = Math.round(Math.random()*10);
let guessNum;
do{
  guessNum = prompt("Guess the Number ");
  if(guessNum==randomNum){
    console.log("Guessed Correctely");
    
  } else{
    console.log("Take another guess");
    
  }



} while(randomNum != guessNum);