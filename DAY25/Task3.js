function validateNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }
  return "Number is valid";
}


try {
  console.log(validateNumber(5));   
  console.log(validateNumber(-3));  
} catch (error) {
  console.error(error.message);
}