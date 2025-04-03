//Q-1
// const arr=[1,2,3,4,5];
// arr.splice(2,0,'a','b','c');
// console.log(arr)

//Q-2 Remove dulpicates
// const arr = [1, 2,2,2, 3, 2, 4, 3, 5, 1]
// for (let i = 0; i <= arr.length; i++) {
//     // for (let j = i + 1; j <= arr.length; j++) {
//     //     if (arr[i] === arr[j]) {
//     //         arr.splice(j, 1);
//     //     }
//     // }
//     if(arr.indexOf(arr[i])!==i){
//         arr.splice(i,1)

//     }

// }
// console.log(arr)

//Q-3 Reverse using splice
// const arr = [1, 2, 3, 4, 5];
// for (let i = arr.length-1; i >= 0; i--) {
//     arr.push(arr.splice(i, 1)[0])
// }
// console.log(arr)

// while(start<n/2){
//     swap (Array, start, len-start);
//     start;
// }

//Q-4 Find Second Largest
// const arr = [10, 5, 8, 20, 15];
// let p;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//                 p=arr[j]; // Not perferct
                
//         }
//     }
// }
// console.log(p)

// let large=-Infinity;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large)
//         large=arr[i]
// }

// let secola=-Infinity
// for(i=0;i<arr.length;i++){
//     if(sl<arr.length[i]&&arr!==length)
// }

//Q-5  moves zeroes to the end
const arr=[0,1,0,3,12];
const p=[];
for(let i=0;i<=arr.length;i++){
    if(arr[i]===0){
        p.push(arr.splice(i,1)[0]);arr[cpovit 
            
        ]
    }
}
arr.push(p)
console.log(arr)