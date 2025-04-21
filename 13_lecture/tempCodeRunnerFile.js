const students = [
  { name: "Rahul", score: 45 },
  { name: "Priya", score: 78 },
  { name: "Ajay", score: 88 },
  { name: "Neha", score: 32 },
];
//    Q: Use map, filter, reduce to calculate the average score of students who passed (score >= 50)

const passedStudents = students.filter(student => student.score >= 50)
  .map((student => student.score))
  .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);
console.log(passedStudents); 