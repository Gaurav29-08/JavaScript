// let str = 'Javascript is an amazing langauge';
// let count = 0;
// let char = "a";
// for(let i = 0;i<str.length;i++){
//   if(str.charAt(i)== char) {
//   count++;
//   }

  
// }
//   console.log(count);

function countChar(str,char){
  let count = 0;
  for(let i=0;i<str.length;i++){
    if(str.charAt(i)==char){
      count++;
    }

  }

  console.log(count);
  

}
let str = 'Javascript is an amazing langauge';
let char = "a";
countChar(str,char);