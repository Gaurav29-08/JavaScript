function greetUser(name,callback){
  console.log("Hello",name);
  callback();

}


  function sayBye(){
    console.log("Good Bye");
    
  }
  
greetUser("Gaurav",sayBye);