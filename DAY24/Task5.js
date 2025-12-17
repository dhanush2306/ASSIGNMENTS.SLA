function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }
  return "Valid number";
}


try {
  console.log(checkNumber(10));   
  console.log(checkNumber(-5));  
} catch (error) {
  console.error(error.message);
}