// Given an integer array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Input: [1,2,3,4] 
// Output: [24,12,8,6]

function product(arr) {
    const pro = [];
    for (let i = 0; i < arr.length; i++) {
        let duc = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                duc *= arr[j];
            }
        }
        pro.push(duc)
    }
    return pro;
}
const nums = [1, 2, 3, 4];
console.log(product(nums));

// Given an input string, reverse the string word by word.
// Input: " hello world "
// Output: "world hello"

let str = "hello world";
console.log(str.split(" ").reverse(" ").join(" "));

//swap function 

// Given a string s, return the longest palindromic substring.
// Input: "babad" 
// Output: "bab" or "aba"

function random(start, end, str) {
    while (start > 0 && end < str - 1) {
        str[start] = str[end];
        start++
        end--
    }
    return str.slice(start + 1, end)
}
let long = " ";
let str = "babad";
for (i = 0; i < str.length; i++) {
    const odd = random(i, i + 1, str);
    if (odd.len > long.len)
        long = odd;
    const even = random(i, i + 1, str);
    if (even.len > long.len)
        long = even;
}
return long;