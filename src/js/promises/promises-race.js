const promise1 = new Promise((resolve, reject) => {
    const timeout = 1000;
    setTimeout(() => reject('Timeout ' + timeout), timeout);
});


const promise2 = new Promise((resolve, reject) => {
    const timeout = 2000;
    setTimeout(() => resolve('Timeout ' + timeout), timeout);
});

Promise.race([promise1, promise2])
.then(data => console.log(data))
.catch(err => console.warn(err));