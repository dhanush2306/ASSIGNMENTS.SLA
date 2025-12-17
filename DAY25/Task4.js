function validateForm(name, email) {
  if (!name || name.trim().length < 3) {
    throw new Error("Invalid name: Name must be at least 3 characters long");
  }

  if (!email || !email.includes("@")) {
    throw new Error("Invalid email: Please enter a valid email address");
  }

  return "Form data is valid";
}

try {
  console.log(validateForm("Jo", "jo@gmail.com"));   
  console.log(validateForm("John", "john@gmail.com")); 
} catch (error) {
  console.error(error.message);
}