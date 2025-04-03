const arr = [1, 2, 4, true, [1, 2]];
console.log(arr);
//Clg is browser part

//  push2 class after we creating

const arr1 = [1, 2, 4, 5, 6, 7, 5]
arr1.push(45) //Adding to the bottom
console.log(arr1);

arr1.pop(); //Deleting from the bottom
arr1.pop();
console.log(arr1);

arr1.unshift(79); //Adding from the top
arr1.unshift(45);
console.log(arr1)

arr1.shift(); //Deleting from the front
console.log(arr1);
arr1.slice(2, 4); //index to n-1 

arr1.splice(2, 4, 16, 17) // Deleting index to n-1 and gving the values
console.log(arr1)