let s = "abcabcbb";
ar = s.split("");
let br;
for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (ar[i] == ar[j]) {
            s.repeat(ar[i])
            break;
        }
    }
}
console.log(br)