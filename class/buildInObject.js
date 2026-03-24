//Date
  const today = new Date();
  console.log(today);
  

  const birthDae = new Date("2006-10-05");
  console.log(birthDae.getFullYear());
  

  const someDay = new Date(1990, 7);
  console.log(someDay);
  
  const birthStr = birthDae.toDateString();
  console.log(birthStr);
  