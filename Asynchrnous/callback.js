function greetUser(name,callback){
  console.log("hello : ", name);
  callback();
}

  function sayBye(){
    console.log("Bye Gaurav");
    
  }
  




greetUser("gaurav",sayBye)