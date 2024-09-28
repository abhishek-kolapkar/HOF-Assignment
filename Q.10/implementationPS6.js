function implementationPS6(subjects, students) {
  let newObj = {};

  for (let student of students) {
    const { name, subjectID } = student;

    let subject = subjects[subjectID];

    if (newObj[name]) {
      newObj[name].push(subject);
    } else {
      newObj[name] = [subject];
    }
  }

  return newObj;
}

let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];
console.log(implementationPS6(subjectsHash, students));
