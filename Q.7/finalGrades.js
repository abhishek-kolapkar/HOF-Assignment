function calculateFinalGrades(obj) {
  // Write code here
  const result = [];

  obj.map(({ scores }, i) => {
    let sumOfScores = 0;
    let numberOfScores = scores.length;

    if (numberOfScores === 0) {
      console.log('Please enter valid scores');
    } else {
      scores.map(num => sumOfScores += num);
    }

    obj[i].finalGrade = Math.round(sumOfScores / numberOfScores);
  })

  obj.filter(({ id, name, finalGrade }) => {
    if (finalGrade >= 70) {
      result.push({ id, name, finalGrade });
    }
  })

  return result;
}


const students = [
  { id: 1, name: "Alice", scores: [85, 90, 92] },
  { id: 2, name: "Bob", scores: [70, 68, 72] },
  { id: 3, name: "Charlie", scores: [60, 65, 58] },
  { id: 4, name: "David", scores: [75, 80, 78] },
];

const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);