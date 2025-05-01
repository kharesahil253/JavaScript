const arr = [1, 2, 3];
const newArr = arr.filter((i,nums) => nums !== 2)
console.log(newArr);

//Reduce 
const reducerNUm = arr.reduce((acc, curr) => acc + curr, 0);
console.log(reducerNUm);

// Foreach
arr.forEach((val, index) => {
    arr[index] = val * 2;
});
console.log(arr);