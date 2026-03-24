//ConstructionFunction

function Movie(title,year){
  this.title = title;
  this.year = year;

  this.getDetails = function (){
    console.log(`Title : ${this.title}
      Year : ${this.year}
      `);
    
  }
};


const movie1 = new Movie("Avatar",2012);
console.log(movie1);



// movie1.getDetails();


