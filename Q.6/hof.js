// mapping elements
function doubleNum(input) {
  let numbers = input.split(" ").map((num) => +num); // convert strings to numbers

  // handle empty input or characters
  if (!input || input.trim() === "" || numbers.some(isNaN)) {
    return "Enter valid input";
  }

  return numbers.map((num) => num * 2);
}


// filtering elements
function filterEvenNum(input) {
  let numbers = input.split(", ").map((num) => +num); // convert Strings to Numbers

  // handle empty input or characters
  if (!input || input.trim() === "" || numbers.some(isNaN)) {
    return "Enter valid input";
  }

  return numbers.filter((num) => {
    if (num % 2 === 0) {
      return `${num}`;
    }
  });
}


// reducing elements
function sumOfNum(input) {
  let numbers = input.split("; ").map((num) => +num); // convert Strings to Numbers

  // handle empty input or characters
  if (!input || input.trim() === "" || numbers.some(isNaN)) {
    return "Enter valid input";
  }

  return numbers.reduce((acc, num) => acc + num, 0)
}


console.log(doubleNum("1 2 3 4"));
console.log(filterEvenNum("1, 2, 3, 4, 5"));
console.log(sumOfNum('5; 10; 15'))
