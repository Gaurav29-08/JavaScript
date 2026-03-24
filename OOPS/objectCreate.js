const car = {
  getDetails(name){
    console.log(`your car ${name}`);
    
  }
}

const car1 = Object.create(car);
car1.getDetails("audi");