function Movie(title,year){
  this.title = title;
  this.year = year;
  this.getDetails =  function(){
    console.log(`Title : ${this.title} 
      Year : ${this.year}`);
    
  };
}

const movie2 = new Movie("Avatar",2022);
console.log(movie2);
movie2.getDetails();
