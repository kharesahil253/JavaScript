// Callback Function

function greet(name, callback) {
    console.log("Good Morning", name);
    callback();
}
function goodby() {
    console.log("Goodby yoo")
}
greet('Bhanu Pratap', goodby);

//Pracetice
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

//Arrays with call back function
const radii = [1, 2, 3, 4, 5];

const area = (r) => 3.14 * r * r;
const circumfernce = (r) => 2 * 3.14 * r;
const diameter = (r) => 2 * r;

const calculate = (r, callback) => {
    const outp = []
    for (let r of radii) {
        outp.push(callback(r))
    }
    return outp;
}
console.log("Area are of radius", calculate(radii, area));
console.log("Diameter are of radius", calculate(radii, diameter));
console.log("Circumfernces are the of radius", calculate(radii, circumfernce));

//Question given is done 
const calculateG = (a, b, callback) => {
    return callback(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multipy = (a, b) => a * b;
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;

console.log("Add: ", calculateG(2, 3, add));
console.log("Subtract: ", calculateG(2, 3, subtract));
console.log("Multiply: ", calculateG(2, 3, multipy));
console.log("Divide: ", calculateG(2, 3, divide));
console.log("Mod: ", calculateG(2, 3, mod));