const passedStudents = students.filter(student => student.score >= 50)
  .map((student => student.score))
  .reduce((acc, curr, student) => acc + curr / student.length)


console.log(passedStudents); 