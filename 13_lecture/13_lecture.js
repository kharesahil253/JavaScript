function user(name, callback) {
    console.log("Logging in")
    setTimeout(() => {
        console.log("Welcome", name)
    }, 1000)
    callback();
}

function dashboard() {
    setTimeout(() => {
        console.log("This is our Dashboard")
    }, 2000);
}
// Calling the function 
user("Sahil", dashboard);

//pyramid of dom