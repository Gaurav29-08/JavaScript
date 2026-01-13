let emailId = "gauravsirari424@gmail.com";
let emailLength = emailId.length;
let dotIndex = emailId.lastIndexOf(".");
let atdIndex = emailId.lastIndexOf('@');
let lastIndex = emailLength-1;


if(emailLength>11&&(lastIndex-dotIndex===2||lastIndex-dotIndex===3)&&dotIndex-atdIndex>3){
  console.log("Valid email");
  
}
else{
  console.log("invalid");
  
}