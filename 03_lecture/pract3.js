// let a = 10, b = 5;
// console.log(a++ + ++b);    //16
// console.log(--a + b--);    //16
// console.log(a, b);         //5



// let x = 7;
// console.log(x++ + ++x + x-- + --x);  


// let num = 15;
// console.log(num++ * 2);      
// console.log(++num / 3);       
// console.log(--num % 4);       
// console.log(num-- + 5);    
// console.log(num);   


// // let a = 20, b = 10;
// // a = ++b + b++ - --a + a--;
// console.log(a, b);


// let count = 5;
// console.log(count++ + ++count - count-- + --count);  
// console.log(count);



// let x = 3, y = 4;
// console.log(++x * y-- + --y + x++);   
// console.log(x,y);

// let a = 8, b = 3;
// a = --b + a++ * ++b - b-- + a--;
// console.log(a, b);


// let value = 12;
// console.log(++value + value-- + --value + value++);  
// console.log(value);



// let m = 9, n = 4;
// console.log(m++ * --n + ++m / n--);   
// console.log(m, n);


let x = 11, y = 6;
x = ++y - x-- + y++ * --x;
console.log(x, y);