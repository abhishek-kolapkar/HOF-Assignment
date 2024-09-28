// strings swapping
function stringsSwap(strArr) {
  return strArr.map((str) => {
    let n = str.length;
    if (n <= 1) return str;

    return str[n - 1] + str.slice(1, -1) + str[0];
  });
}

const strings = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
console.log(stringsSwap(strings));
