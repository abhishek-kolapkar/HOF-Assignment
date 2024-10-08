function messageArray(courses) {
  const eo1 = courses.map(
    ({
      courseName,
      courseDuration,
      category,
      type,
      techTools,
      techdetails,
    }) => {
      let techToolsDetails = [];

      // type-of-course
      for (let i of typeOfCourse) {
        if (type === i.id) {
          type = i.name;
        }
      }

      // techTools
      for (let i in techTools) {
        if (techTools[i] && techdetails[i] !== null) {
          techToolsDetails.push({
            language: techTools[i],
            details: techdetails[i],
          });
        }
      }

      return {
        courseName: courseName,
        courseDuration: CourseDurationDirectory[courseDuration],
        Category: Category[category],
        type,
        techTools: techToolsDetails,
      };
    }
  );

  return eo1;
}

let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
let exampleInputArray = [
  {
    courseName: "masai frontend web26",
    courseDuration: 2,
    category: 3,
    type: 1,
    techTools: {
      1: "HTML",
      2: "CSS",
      3: "javaScript",
      4: "React",
      5: "Redux",
      6: "Node.js",
      7: "Express",
      8: "MongoDB",
      9: "Bootstrap",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "HTML is the standard markup language for Web pages.",
      2: "CSS is the language we use to style an HTML document. ",
      3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
      4: "React is a JavaScript library for building user interfaces.",
      5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
      6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      7: "Express is a minimal and flexible Node.js web application framework .",
      8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
      9: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "foundation batch",
    courseDuration: 2,
    category: 4,
    type: 2,
    techTools: {
      1: "aptitude",
      2: "GitHub",
      3: "C",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "1. a natural ability or skill: 2. a natural ability or skill:",
      2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
      3: "C is a general-purpose programming language, developed in 1972",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "Java batch",
    courseDuration: 1,
    category: 5,
    type: 1,
    techTools: {
      1: "ETL",
      2: "Perl",
      3: "C#",
      4: "Python",
      5: "PHP",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
      2: "Perl is a high-level scripting language",
      3: "C# was originally designed to be easy to learn and use",
      4: "Python is one of the most beginner-friendly programming languages out there.",
      5: "PHP is a scripting language running on the server side",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
];

console.log(
  messageArray(
    exampleInputArray,
    typeOfCourse,
    CourseDurationDirectory,
    Category
  )
);
