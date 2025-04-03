// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// const nums = [2, 7, 11, 15];
// let target = 9;
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log(nums.indexOf(i))
//         }
//     }
// }


// sort 0 1 2 without using .sort() method

// function swap(arr, a, b) {
//     let temp = a;
//     a = b;
//     b = temp
// }
// const num1 = [2, 0, 2, 1, 1, 0]
// let mid = Math.ceil(num1.length / 2)
// let h = [];
// for (let i = 0; i <= mid; i++) {
//     for (let j = num1.length; j >= mid; j--) {
//         if (num1[i] > num1[j]) {
//             let tme = num1[i];
//             num1[i] = num1[j];
//             num1[j] = tme;
//         }
//     }
// }
// console.log(num1);

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// const arr2 = [3, 2, 3]
// let count = 0;
// for (let i = 0; i < arr2.length ; i++) {
//     if (arr2[i] == arr2[i + 1]) {
//         count ++
//         console.log(arr2[i])
//     }
// }


// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// const nums = [5, 4, -1, 7, 8];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i]
// }
// console.log(sum)

// You are given an array nums of length n, which should contain all numbers from 1 to n. However, one number is repeated, and one number is missing.
const nums = [1, 2, 2, 4];
let n = nums.length - 1;
let jo;
for (let i = 0; i < n; i++) {
    jo = (n * (n - 1)) / 2;
}
console.log(jo)
