// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.✔️
// const nums = [2, 7, 11, 15];
// let target = 9;
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log([i,j])
//         }
//     }
// }


// sort 0 1 2 without using .sort() method 
// const num1 = [2, 1, 0, 2, 1, 0]
// let n = num1.length
// let low = 0, mid = 0, high = n - 1;
// while (mid <= high) {
//     if (num1[mid] === 0) {
//         [num1[mid], num1[low]] = [num1[low], num1[mid]];
//         low++
//         mid++
//     }
//     else if (num1[mid] === 1) {
//         mid++
//     }
//     else {
//         [num1[mid], num1[high]] = [num1[high], num1[mid]];
//         high--;
//     }
// }
// console.log(num1);

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// const arr2 = [2, 3, 1, 3, 3]
// let ele = 0, count = 0
// for (let i = 0; i < arr2.length; i++) {
//     if (count === 0) {
//         ele = arr2[i];
//     }
//     arr2[i] === ele ? count++ : count--;
// }
// count = 0
// for (let j = 0; j < arr2.length; j++) {
//     if (ele === arr2[j]) {
//         count++
//     }
// }
// if (count > n / 2) {
//     return ele;
// }
// console.log(ele)


// Given an integer array nums, find the subarray with the largest sum, and return its sum.
const nums = [5, 4, -1, 7, 8];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
for (let k = 0; k < nums.length; k++) {
    for (let j = k + 1; j <= nums.length; j++) {
        if (nums[k] + nums[j] > sum) {
            sum = nums[k] + nums[j];
        }
    }
}
console.log(sum)



// You are given an array nums of length n, which should contain all numbers from 1 to n. However, one number is repeated, and one number is missing.
// const nums = [1, 2, 3, 4, 5, 5, 7];
// function natural(arr) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i + 1) return [nums[i], i + 1]
//     }
//     return -1;
// }
// console.log(natural(nums))

