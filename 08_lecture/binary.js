function search(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return true;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return false;
}
const arr1 = [3, 4, 5, 6, 2, 6, 2]
let ta = 5
const ans = search(arr1, ta)
console.log(ans)

// Last occurrence in a sorted array
// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
// Input: N = 7
// Output: 4
// function lastocc(arr, target) {
//     let start = 0, end = arr.length - 1;
//     let res = -1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             res = mid;
//             start = mid + 1;
//             // For first occurence end = mid -1
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }
//     }
//     return res;
// }
// const nums = [3, 4, 13, 13, 13, 20, 40];
// let targ = 13
// console.log(lastocc(nums, targ))