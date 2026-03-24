class Vehicle {
  // This creates a class named Vehicle.
  constructor(name){
    // this refers to the object being created.
    this.name = name;
  }
  // constructor is a special function that runs automatically when an object is created.

// It is used to initialize properties.

  start(){
    console.log(this.name + " started");
    // this is a method of the class
  }
}


//
// Here we create another class Car.
// extends means inheritance.

class Car extends Vehicle {
}

// new creates a new object from the class.
const c1 = new Car("BMW");

c1.start();

// Car inherits everything from Vehicle.
// In JavaScript inheritance works through the prototype chain where a child class object can access methods from the parent class prototype.