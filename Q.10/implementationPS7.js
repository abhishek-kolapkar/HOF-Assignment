function implementationPS7(students) {
  const messagedData = students.map((student) => {
    const marks = [
      { subject: student.subject1, score: student.marks1 },
      { subject: student.subject2, score: student.marks2 },
      { subject: student.subject3, score: student.marks3 },
      { subject: student.subject4, score: student.marks4 },
      { subject: student.subject5, score: student.marks5 },
    ].filter((entry) => entry.subject && entry.score !== null);

    return {
      name: student.name,
      marks,
    };
  });

  return messagedData;
}

let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
console.log(implementationPS7(allStudentsMarksData));
