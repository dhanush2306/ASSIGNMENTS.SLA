function checkNumber(num) {
    if (num > 100) {
        throw new Error("Number cannot be greater than 100!");
    } else {
        console.log("Number is valid:", num);
    }
}

try {
    checkNumber(150);  
} catch (error) {
    console.log("Error caught:", error.message);
}

try {
    checkNumber(50);  
} catch (error) {
    console.log("Error caught:", error.message);
}