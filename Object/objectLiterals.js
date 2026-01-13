const student = {
  name : "Gaurav",
  age : 24,
  familyMembers : {
    fatherName : "Himanshu Sirari",
    motherName: "Prema Sirari"
  },
  frieds : ["gaurav","rakesh","lalit"],
  
  greetHello : function(){
    console.log(`Hello my friends: ${student.name} `);
  },

  greetBye : function(who){
    console.log(`good bye ${who}`);
  }
};

console.log(student.name);
student.greetHello();
const who = "soni";
student.greetBye(who);

console.log(student["age"]);
console.log(student["name"]);


