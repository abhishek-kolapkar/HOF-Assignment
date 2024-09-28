// Multiple of Three or Five
function multipleOfThreeFive(arr) {
  return arr.reduce((acc, num) => {
    if (num % 3 === 0 || num % 5 === 0) acc += num;

    return acc;
  }, 0);
}

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
console.log(multipleOfThreeFive(numbers));
