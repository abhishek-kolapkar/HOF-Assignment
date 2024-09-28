// Reduce - HOF
function uniqueString(arr) {
  return arr.reduce((acc, ele) => {
    if (acc[ele]) {
      acc[ele]++;
    } else {
      acc[ele] = 1;
    }

    return acc;
  }, {});
}

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
console.log(uniqueString(strings));
