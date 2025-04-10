// Given a string, find the length of the longest substring without repeating characters.
// Input: "abcabcbb" → Output: "abc"
 function str(s) {
    let current = '', long = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (current.includes(char)) {
            let idx = current.indexOf(char);
            current = current.slice(idx + 1);
        }
        current += char;
        if (long.length < current.length){
             long = current
        }
    }
    return long;
};

let s = "abcabcbb";
console.log(str(s))


// Given two strings, determine if one is an anagram of the other.
// Input: s = "anagram", t = "nagaram" → Output: true
// let v = "anagram";
// let r = "nagaram";
// function ang() {
//     if (v.length !== r.length)
//         return false;
//     return v.sort() === r.sort();
// }
// console.log(ang())
