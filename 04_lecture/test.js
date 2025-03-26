
// console.log(1 && 0 || 2 && 3);  
// console.log(0 || null && 5);   
// console.log("" && "Hello" || "World");  
// console.log(undefined || NaN && true);  



// let x = 5;
// let y = 10;
// let output = x > y ? "X is greater" 
//            : x < y ? "Y is greater" 
//            : "Both are equal";
// console.log(output);


// function isEven(num) {
//   // Use bitwise operator to determine even/odd
//   if ( num & 1 === 0){
//     console.log(true)
//   }
//   else{
//     console.log(false)
//   }
// }
// console.log(isEven(10));   // true
// console.log(isEven(7));    // false



// console.log(0 == false);     
// console.log(0 === false);    
// console.log('5' == 5);       
// console.log('5' === 5);      
// console.log(null == undefined);
// console.log(null === undefined);


// let x = 10;
// x += 5;  
// x -= 3;  
// x *= 2;  
// x /= 4;  
// x %= 3;  
// x **= 2;  
// console.log(x);

// function checkEvenOdd(a, b) {
//     // Use ternary operator
//     a%2==0 && b%2==0 ?console.log("Both Even"):a%2 !== 0 && b%2 !== 0?console.log("Both odd"):console.log("Mixed")
//   }
  
//   console.log(checkEvenOdd(4, 6));    // "Both even"
//   console.log(checkEvenOdd(3, 5));    // "Both odd"
//   console.log(checkEvenOdd(2, 7));    // "Mixed"  
  
  
  // let a = 12;    
  // let b = 5;     
  // console.log(a & b);   
  // console.log(a | b);  
  // console.log(a ^ b);  
  // console.log(~a);   //doubt
  
  
  // let a = 0;
  // let b = null;
  // let c = undefined;
  // let d = false;
  
  // console.log(a || "Default A");
  // console.log(b ?? "Default B");
  // console.log(c || "Default C");
  // console.log(d ?? "Default D");
  
  
  let x = 15;
  let y = 27;
  // Swap x and y using bitwise operators
  
  
  const a = 5;
  const b = "5";
  const c = 10;
  const result = a == b && a < c || c > a && b === a;
  console.log(result);