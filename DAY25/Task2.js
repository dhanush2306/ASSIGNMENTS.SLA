try {
  
  let result = 10 / 2;
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Code executed.");
}