const helper = (val, cb, t) => {
    setTimeout(() => {
        cb(val)
    }, t * 1000)
}

const getUser = (cb) => {
    const user = { id: 1, name: 'Sahil' }
    helper(user, cb);
}

const getOrder = (user, cb) => {
    const order = { id: 2, item: 'phone' }
    helper(order, cb);
}

//calling it by promisies if the above callback function
getUser().then((user) => getOrder(order))
    .then(order => console.log('s'))
    .then((s) => console.log('s'))
    .catch((e) => console.log('e'))
    .finally(() => console.log('Done'))

//Promise creation 
const pr = new Promise((res, rej) => {
    const success = true;
    if (success)
        res('Its work')
    else res('not work')
})

pr.then((res) => console.log('result'))
    .catch(rej => console.log('e'))

// What is the purpose of a Promise in JavaScript? How is it different from a callback function?


// Write a Promise that resolves after 2 seconds with the message “Hello after delay”.

console.log("Start...");
const promise = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("helloo i am delay 3 second")
    },2000)
});
promise.then((res) => {
    console.log(res)
})
console.log("End");


// Convert the following callback-based function to use Promises:
function getData(){
    console.log("data fetching...")
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("data received")
        },2000)
    });
}

getData().then((res) => {
    console.log(res)
});