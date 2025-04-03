//Sum of digits 
let n = 45679312321;
// let sum = 0;
// while (n !== 0) {
//     let rem = n % 10;
//     sum += rem
//     n = Math.floor(n / 10);
// }
// console.log(sum); //Answer- 43

//Prime Number
// let m = 28;
// for (let i = 2; i <= Math.sqrt(m);i++) {
//     if (m % i === 0) {
//         console.log("Not a prime number")
//         break;
//     }
//     else {
//         console.log("Prime number")
//         break;
//     }
// }

//Find between prime number
let start = 10;
let end = 50;

for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j <= start - 1; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

//GCD of two number
let a = 56, b = 98;
let gcd;
for (i = 2; i <= Math.min(a, b); i++) {
    if(a%i===0&&b%i===0){
        gcd=i;
    }
}
console.log(gcd)

