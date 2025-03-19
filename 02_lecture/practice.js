//First
// let x=10;
// function test(){
//     let x=20;
//     console.log(x);
// }
// test();
// console.log(x);

//Second one
// {
//     let a=10;
//     var b=20;
// }
// console.log(b); //not defined error
// console.log(a);

// Third one
// function scopeTest() {
//     if (true) {
//       var x = 5;
//       let y = 10;
//     }
//     console.log(x);
//     console.log(y); // refrence error not accssed
//   }
//   scopeTest();

// Fourth one
// let a = 1;
// function outer() {
//     let a = 2;
//     function inner() {
//         let a = 3;
//         console.log(a);     
//     }
//     inner();
//     console.log(a);
// }
// outer();
// console.log(a);

// Fifth
// let x = 10;

// function foo() {
//   console.log(x); // not defined
//   let x = 20;
// }
// foo();

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }

// var a = 1;

// function example() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
//   }
  
// example();

// let a = 5;

// {
//   let a = 10;
//   {
//     let a = 15;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

//
// let a = 10;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   let a = 20;
//   foo();
// }

// bar();
// 

var a = 1;
function outer() {
  var a = 2;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn();