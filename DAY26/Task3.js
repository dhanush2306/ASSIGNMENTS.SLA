function doTaskPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("Task Completed");
            } else {
                reject("Task Failed");
            }
        }, 2000);
    });
}


doTaskPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });