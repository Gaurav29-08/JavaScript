function greet(callback){
  setTimeout(()=>{
    console.log("hello");
    callback();

    
  },1000);
}


function message(){
  console.log("Welcome to the session");
  
}

greet(message);

