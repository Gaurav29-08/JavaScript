// console.log("start");

// function cb(){
//   console.log("hello soni");
  
// }
// cb();


// setTimeout(() => {
//   console.log("hello gaurav");
  
  
// }, 0);


// console.log("end");


const radius = [2,4,5,6];
const area = function(radius){
  const output = [];
  for(let i=0;i<radius.length;i++){
    output.push(Math.PI*radius[i]*radius[i]);
  }
  return output;
}

console.log(area(radius));


