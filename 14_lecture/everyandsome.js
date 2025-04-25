const arr = [110, 90, 120, 130]

//every
const is = arr.every(item => item >= 0)
console.log(is) //every element has true value then only true like AND operator

//some
const isno = arr.some(item => item > 100)
console.log(isno) //one of them is true then true like OR operatoe 
//These both the values return boolean true false values 

// const str = "Who will cry when you will die";
// const str1 = "The quick brown fox jumps over the lazy dog";
// const ans1 = panGram(str1);
// const ans2 = panGram(str);
// console.log(ans1); // true
// console.log(ans2); // false create funciton for this
const panGram = (sentence) => {
    
}