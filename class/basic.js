class Vechile {
  //properties  (variable) of class)
  name;
  color;
  wheels;

  //they represent the data of the vechicle

  constructor(name,color,wheels){
//  the constructor is used to initialize the properties of the object when the object is created.
    
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }

  
//method

getDetails(){
  console.log(`The ${this.name}`);
  
}


}


const veh1 = new Vechile("scoty","grey",2);
console.log(veh1);
veh1.getDetails();
