// let n = 10;
// let a = 0, b = 1;
// for (let i = 0; i <= 5; i++) {
//     let next = a + b;
//     for (let j = 0; j <= i; j++) {
//         a = b;
//         b = next;
//     }
//     console.log(next);
// }

let n = 5
let a = 0, b = 1
for (let i = 1; i <= n; i++) {
    let num = ''
    for (let j = 1; j <= i; j++) {
        num += b + " ";
        let next = a + b;
        a = b;
        b = next;
    }
    console.log(num)
}

//While this deep
let m=123
let num=0;
while(m!==0){
    let rem=m%10;
    num=num*10+rem;
    m=Math.floor(m/10);
}
console.log(num)

//