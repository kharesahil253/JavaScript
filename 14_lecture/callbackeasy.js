//Asynchronous type of data use set timeout fetching something visiualsize

//This is a helper function that is taking setTimeout to didn't run many times 
const ProcessData = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }
        , 2000)
}
//From here i am creating nested callback function
const getUser = (callback) => {
    const user = { id: 1, name: 'Sahil' }
    ProcessData(user, callback);
}
const getOrder = (user, callback) => {
    const order = { id: 2, item: 'Laptop', user }
    ProcessData(order, callback)
}
const getShopping = (order, callback) => {
    const shopping = { id: 1, status: 'On the way', order }
    ProcessData(shopping, callback)
}
const payment = (shopping, callback) => {
    const pay = { id: 1, confirm: 'Successful', shopping };
    ProcessData(pay, callback);
}

//Callback hell calling is dangerous dude
getUser(function (user) {
    console.log(`User:${user}`)
    getOrder(user, function (order) {
        console.log(`Order ${order}`);
        getShopping(order, function (shopping) {
            console.log(`Shipping ${shopping}`)
            payment(shopping, function (pay) {
                console.log(`Payment ${pay}`);
                console.log(`Done`)
            })
        })
    })
})

//Questions that are given
// Create a custom higher-order function called processData that takes a value and a callback function.
// Then simulate a real-life asynchronous operation like fetching user details, then getting their order details, then getting shipping details — all using nested callbacks and for this question first function call after 1 sec 2nd //funciton after 2sec and so on
const main = (user, testback, t) => {
    setTimeout(() => {
        testback(user);
    }, t * 1000)
}

const ProcessData1 = (callback) => {
    return () => {
        console.log(`Order for ${user}`);
        main(user, callback, 1);
    }
}

const order1 = (ord, callback) => {
    return () => {
        console.log(`Order is ${ord}`);
        main(ord, callback, 2);
    }
}
const shopping1 = (shop, callback) => {
    return () => {
        console.log("Item is");
        console.log("done");
        main(shop, callback, 3)
    }
}

main(ProcessData1('Sahil', order1('confirmed', shopping1('Laptop'))));
