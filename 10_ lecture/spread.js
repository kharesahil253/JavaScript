// const arr = [3, -49, 8, 9, 20]
// console.log(Math.min(...arr))

// function sum(...args) {
//     let sum1=0;
//     for(let i=0;i<args.length;i++){
//             sum1+=args[i]
//     }
//     return sum1
// }
// const ans = sum(1, 2, 3, 4, 5)
// console.log(ans)

//Q-1
// combineAndSort([3, 1], [5, 2], [4]);
// // Output: [1, 2, 3, 4, 5]
// Do not use flat(). Use spread and rest.
// const combineAndSort = (...array) => {
//     const rs = [];
//     for (const val of array) {
//         for (const item of val) {
//             rs.push(item)
//         }
//     }
//     return rs.sort();
// }
// console.log(combineAndSort([3, 1], [5, 2], [4]))

// [].concat.array.sort()

//Q-2
const user = {
    Name: "Alice",
    age: 25,
    city: "Delhi",
    job: "Engineer"
};
function extractKeys(user, ...args) {
    const res = []
    for (const key of args) {
        if (key in user) {
            res[key] = user[key]
        }
    }
    return res;
}
const data= extractKeys(user, "Name", "job")
console.log(data)
// // Output: { name: "Alice", job: "Engineer" }