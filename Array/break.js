let myArray = [2,3,4,5,6,8,9,10,12,13,14,15,16,18];
let newarray=[];
for(let element of myArray){
  if(element % 2 !==0 ){
    continue;
  }
 newarray.push(element);
 if(newarray.length===5){
  break;
 }
 console.log(newarray);
 
  
  
}
