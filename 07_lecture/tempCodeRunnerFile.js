const arr = [1, 2,2,2, 3, 2, 4, 3, 5, 1]
for (let i = 0; i <= arr.length; i++) {
    // for (let j = i + 1; j <= arr.length; j++) {
    //     if (arr[i] === arr[j]) {
    //         arr.splice(j, 1);
    //     }
    // }
    if(arr.indexOf(arr[i])!==i){
        arr.splice(i,1)
    i--;

    }
}
console.log(arr)