const student = {
  name : "soni",
  age : 20,
  city : "Almora",
  "last Name" : "bagdwal",

  greet (){
    console.log("Good morning");
    
  },

  details (){
    console.log(`name : ${this.name}
      age : ${student.age}
      city : ${student.city}
      
      `);
    

  }
  
 
  
};

student.details();






