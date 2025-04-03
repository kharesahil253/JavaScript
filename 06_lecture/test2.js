// Question -1 

// let rows = 5;
// let a = 0, b = 1;
// for (let i = 1; i <= rows; i++) {
// 	let num = '';

// 	for (let j = 1; j <= i; j++) {
// 		num += a + " ";
// 		let next = a + b;
// 		a = b
// 		b = next
// 	}
// 	console.log(num)
// }

// //Question -2

// function ispalindrome(n) {
// 	let store = n;
// 	let sum = 0;
// 	while (n !== 0) {
// 		let rem = n % 10;
// 		sum = sum * 10 + rem;
// 		n = Math.floor(n / 10);
// 	}
// 	if (sum == store) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
// console.log(ispalindrome(121))

//Q-3
// let n = 4;
// let sum = 0
// for (let i = 1; i <= n; i++) {
// 	let num = '';
// 	for (let j = 1; j <= n - i; j++) {
// 		num += " ";
// 	}
// 	for (let k = 1; k <= i; k++) {
// 		sum += 1;
// 		num += sum + " "
// 	}
// 	console.log(num)
// }

// let sum2 = 0
// for (let i = n-1; i >= 1; i--) {
// 	let num2 = '';
// 	for (let j = 1; j <= n- i; j++) {
// 		num2 += " ";
// 	}
// 	for (let k = 1; k <= i; k++) {
// 		sum2 += 1;
// 		num2 += sum2 + " "
// 	}
// 	console.log(num2)
// }


// //Q-4
// let n = 5
// let sum=1;
// while (n !== 0) {
//     sum *= n--
// }
// console.log(sum)



// //Q-5
// let sum = 0
// let n = 2345
// while (n !== 0) {
// 	sum++;
// 	 n=Math.floor(n/10);
// 	// let num
// 	// num = num * 10 + rem;
// 	// n = Math.floor(n / 10
// }
// console.log(sum)

// while(true){
// 	console.log(true)
// }
