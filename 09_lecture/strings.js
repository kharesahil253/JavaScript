// Given a string, find the length of the longest substring without repeating characters.
// Input: "abcabcbb" → Output: "abc"

// let s = "abcabcbb";
// ar = s.split("");
// let br;
// for (let i = 0; i < ar.length; i++) {
//     for (let j = i + 1; j < ar.length; j++) {
//         if (ar[i] !== ar[j]) {
//         }
//     }
// }
// console.log(br)


// Given two strings, determine if one is an anagram of the other.
// Input: s = "anagram", t = "nagaram" → Output: true
let v = "anagram";
let r = "nagaram";
function ang() {
    if (v.length !== r.length)
        return false;
    return v.sort() === r.sort();
}
console.log(ang())
