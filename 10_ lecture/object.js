// Given an integer array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Input: [1,2,3,4] 
// Output: [24,12,8,6]

// function product(arr) {
//     const pro = [];
//     for (let i = 0; i < arr.length; i++) {
//         let duc = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 duc *= arr[j];
//             }
//         }
//         pro.push(duc)
//     }
//     return pro;
// }
// const nums = [1, 2, 3, 4];
// console.log(product(nums));

// Given an input string, reverse the string word by word.
// Input: " hello world "
// Output: "world hello"

function reverse(str1) {
    const arr = str1.split('');
    let temp;
    for (let i = 0; i < arr.length / 2; i++) {
        for (let j = arr.length; j >= arr.length / 2; j--) {
            temp = arr[i];
            arr[j] = arr[i];
            arr[j] = temp;
        }
    }
    let r=str1.join();
    return r;
}
let str = "hello world";
console.log(reverse(str));