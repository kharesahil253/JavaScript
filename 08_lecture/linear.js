function linearserach(arr, tar) {
    let start = 0, end = arr.length - 1;
    for (i = start; i < end; i++) {
        if (arr[i] === tar) {
            return true;
        }
    }
    return false;
}
const arr1 = [3, 4, 5, 6, 2, 6, 2]
let ta = 5
const ans = linearserach(arr1, ta)
console.log(ans)