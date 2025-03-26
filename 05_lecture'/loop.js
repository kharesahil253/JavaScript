//For loop
// for (let i = 5; i >= 1; i--) {
//     let num='';
//     for (let j = 1; j <= i; j++){
//         num +=j +" ";
//     }
//     console.log(num)
// }

let n = 5;
let i=1;
let sum = 0;
while ( i <= n) {
    let j = 1;
    let num='';
    while (j <= i) {
        sum +=1
        num += sum + " "
        j++
    }
    console.log(num)
    i++ 
}