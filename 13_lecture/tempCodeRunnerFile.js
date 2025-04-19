const main = (testback) => {
    setTimeout(() => {
        testback();
    }, 1000)
}

const customer = (user, callback) => {
    return () => {
        setTimeout(() => {
            console.log('Order for', user);
            callback();
        }, 2000);
    }
}

const order = (ord) => {
    return () => {
        setTimeout(() => {
            console.log("Order is", ord);
        }, 1000);
    }
}

main(customer('Sahil', order('confirmed')));
console.log("done");