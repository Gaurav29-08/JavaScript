//Normal method 
class Car {

  start(){
    console.log("car started");
  }

}

const c1 = new Car();
c1.start();


//static method 

class Car2 {

  static info(){
    console.log("Cars have engines");
  }

}

// const c2 = new Car();
// console.log(c2);

//error car is not defined
Car2.info();