//Question-1
const products = [
    { name: "Laptop", price: 70000, available: true },
    { name: "Mouse", price: 1500, available: false },
    { name: "Keyboard", price: 3000, available: true },
    { name: "Monitor", price: 12000, available: true },
  ];
// Q: Get the total price of all available products except Laptop using map, filter, reduce
  

//Question -2 
const users = [
    { name: "alice", age: 17 },
    { name: "bob", age: 22 },
    { name: "charlie", age: 19 },
    { name: "dave", age: 16 },
  ];
//    Q: Return a single string of comma-separated capitalized names (e.g., "BOB, CHARLIE") of users over 18

const adults = users.filter(user => user.age > 18);
const capitalizedNames = adults.map(user => user.name.toUpperCase())

// Question-3
const words = ["apple", "banana", "kiwi", "mango", "plum", "grape"];
//  Q: Find the total number of characters in words that have even length using map, filter, reduce
const evenLengt = words.filter(word => word.length % 2 === 0);

//Question-4
const students = [
    { name: "Rahul", score: 45 },
    { name: "Priya", score: 78 },
    { name: "Ajay", score: 88 },
    { name: "Neha", score: 32 },
  ];
//    Q: Use map, filter, reduce to calculate the average score of students who passed (score >= 50)
  
  const passedStudents = students.filter(student => student.score >= 50);
  const scores = passedStudents.map(student => student.score);
  const totalScore = scores.reduce((sum, score) => sum + score, 0);
  
  
  console.log(averageScore); 