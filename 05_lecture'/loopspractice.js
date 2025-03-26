//Using for loop
// for (let i = 0; i < 5; i++) {
//     let star=" "
//     for (let j = 0; j <= i; j++) {
//         star +="*"
//     }
//     console.log(star);
// }


//Using while loop
// let k = 5;
// while (k >= 1) {
//   let star = " ";
//   let j = 1;
//   while (j <= k) {
//     star += "*"
//     j++
//   }
//   console.log(star)
//   k--
// }

//
// // 
// do {
//   let k=5;
//   let star=" "
// } while (k<=5)
//   do {
//     let j=1
//     let star += "*"
//   } while (j<=k);

// Do While


// let n = 5;
// let rows = 1;

// do {
//   let cols = 1;
//   let star = '';

//   do {
//     if (rows == 1 || rows == n || cols == 1 || cols == n) {
//       star += '*';
//     } else {
//       star += ' ';
//     }
//     cols++;
//   } while (cols <= n);

//   console.log(star);
//   rows++;
// } while (rows <= n);

// do while loop
// let n = 5;
// let rows = 1;
// let stand=" "
// do {
//   let cols = 1;
//   let star = ''
//   do {
//     if (cols == 3) {
//       star += '*'
//       break ;
//     }
//     cols++;
//   } while (cols <= n);
//   console.log(star)
//   rows++;
// } while (rows <= n)

// let n = 5;
// let rows = 1;
// for (let i = 0; i <= n; i++) {
//   let star=''
//   for(let j=1 ;j<=i;j++){
//         if(i==1 && j==3){
//           star +="*"
//         }
//         else{
//           star +=" "
//         }
//         if(i==2 && j==2 || j==4){
//           star +="*"
//         }
//         else{
//           star +=" "
//         }
//   }
//   console.log(star)
// }