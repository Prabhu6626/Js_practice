let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('FULLFILLED');
    } else {
        reject('REJECTED');
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});