let firstHead = document.querySelector(".firstheading");
console.log(firstHead);

let firstpara = document.querySelector("#firstpara");
console.log(firstpara);

firstHead.style.color = "red";


const btn = document.createElement("button");
btn.textContent = "CLick me";
btn.className = "btn1";


const division = document.querySelector("div");
division.appendChild(btn);


const para = document.createElement("div");
para.textContent = "Hello I am Gaurav from Almora";

const newpara =  document.querySelector("body");
newpara.appendChild(para);


const newPara = document.querySelector('p');

newPara.addEventListener("click",clickPara);

function clickPara(){
  console.log("para clicked");
  
}


const newButton = document.querySelector("button");

newButton.addEventListener("mouseover",remove);

const newRemove = document.querySelector(".thirdheading");

function remove(){
newRemove.remove();
  // console.log("hello soniu");
  
}


// const hlopara = document.querySelector(".hlo");
// hlopara.addEventListener("click",function(){
//   // console.log("clicked by me ");
//   // hlopara.style.color = "red";
//   document.querySelector("#firstpara").remove();
  


// })


const hlopara = document.querySelector(".hlo");
hlopara.addEventListener("click",(event)=>{
  console.log("Clicked by me");
  console.log(event.timeStamp);
  
  
})

let firstpara1 = document.querySelector("#firstpara");
firstpara.addEventListener("click",()=>{
  console.log("Clicked by sirari");
  
})