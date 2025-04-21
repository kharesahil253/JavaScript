// for (let i = 1; i <= 6, i++) {
//     setTimeout(i{
//         console.log(i);
//     },i + 1000)
// }

const evaluate = (operation) => (a) => (b) => {
    if (operation === 'add') return a + b;
    else if (operation === 'sub') return a - b;
    else if (operation === 'mod') return a % b;
}

const sum = evaluate('add')(3)(2);
console.log(sum);
const sub = evaluate('sub')(3)(2);
console.log(sub);

// Function variable 
function Outer() {
    var name = 'Ram'
    return function Inner() {
        console.log(name);
    }
}

const upper = Outer()
upper();

// var and let 
for (var i = 1; i <= 6; i++) {
    function inner(index) {
        setTimeout(function () {
                console.log(i)
        }, index = 1000)
    }
    inner();
}