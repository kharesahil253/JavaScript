// //Diamond Star Hollow
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let space = ''
//     for (let j = 1; j <= n - i; j++) {
//         space += "  "
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         if (k == 1 || k == 2 * i - 1) {
//             space += "* "
//         }
//         else {
//             space += "  "
//         }
//     }
//     console.log(space)
// }
// for (let i = n - 1; i >= 1; i--) {
//     let line = "";
//     for (let j = 1; j <= n - i; j++) {
//         line += "  ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         if (k == 1 || k == 2 * i - 1) {
//             line += "* ";
//         } else {
//             line += "  ";
//         }
//     }
//     console.log(line);
// }

//Diamond Star
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let space = ''
//     for (let j = 1; j <= n - i; j++) {
//         space += " "
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         if (k % 2 == 0) {
//             space += " "
//         }
//         else {
//             space += "*"
//         }
//     }
//     console.log(space)
// }
// for (let i = n - 1; i >= 1; i--) {
//     let line = "";
//     for (let j = 1; j <= n - i; j++) {
//         line += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {

//         if (k % 2 == 0) {
//             line += " "
//         }
//         else {
//             line += "*"
//         }
//     }
//     console.log(line);
// }


// Triangle Star
let no = 5;

for (let i = 0; i <= no; i++) {
    let star = ''
    for (let j = 0; j <= no - i; j++) {
        star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 == 0) {
            star += " "
        }
        else {
            star += "*"
        }
    }
    console.log(star)
}
//Pyramid triangle star
let n = 5;
for (let i = 1; i <= n; i++) {
    let space = ''
    for (let j = 1; j <= n - i; j++) {
        space += "  "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k == 1 || k <= 2 * i - 1) {
            space += "* "
        } else {
            space += "  "
        }
    }
    console.log(space)
}