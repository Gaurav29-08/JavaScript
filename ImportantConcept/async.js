async function getData(){
  return "hello";
}


const data = getData();
console.log(data);

data.then((res)=>{
  console.log(res);
  
})