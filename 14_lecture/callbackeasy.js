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