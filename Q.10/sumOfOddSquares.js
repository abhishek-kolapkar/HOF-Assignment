// sum of odd numbers squares
function sumOfOddSquaresFilter(numArr) {
  let sum = 0;
  numArr.filter((num) => {
    if (num % 2 !== 0) {
      sum += num ** 2;
    }
  });
  return sum;
}

function sumOfOddSquaresMap(numArr) {
  let sum = 0;
  numArr.map((num) => {
    if (num % 2 !== 0) sum += num ** 2;
  });
  return sum;
}

function sumOfOddSquaresReduce(numArr) {
  return numArr.reduce((acc, num) => {
    if (num % 2 !== 0) acc += num ** 2;

    return acc;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5, 7];
console.log(sumOfOddSquaresFilter(numbers));
console.log(sumOfOddSquaresMap(numbers));
console.log(sumOfOddSquaresReduce(numbers));
