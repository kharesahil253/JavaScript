//Filter 
const arr = [1, 2, 3];
const newArr = arr.filter((nu, i, nums) => nums !== 0)
console.log(newArr);

//Reduce 
const reducerNUm = arr.reduce((acc, curr) => acc + curr, 0);
console.log(reducerNUm);

// Foreach
arr.forEach((val, index) => {
    arr[index] = val * 2;
});
console.log(arr);

// Map
const User = [
    { name: 'Ajeet', roll: 1, marks: 80 },
    { name: 'Aditya', roll: 2, marks: 90 },
    { name: 'Sahil', roll: 3, marks: 70 },
    { name: 'Harsh', roll: 4, marks: 60 }
]

const capitalized = User.map(data => {
    return data.name.toUpperCase()
})
console.log(capitalized)