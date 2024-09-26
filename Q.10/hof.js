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

const strings = [ "apple","banana","apple","orange","banana","pear","apple" ];
console.log(uniqueString(strings));


// Multiple of Three or Five
function multipleOfThreeFive(arr) {
  return arr.reduce((acc, num) => {
    if (num % 3 === 0 || num % 5 === 0) acc += num;
    
    return acc;
  }, 0)

}

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
console.log(multipleOfThreeFive(numbers));


//palindrome string
function palindromesString(arr) {
  let result = [];

  arr.filter(ele => {
    let reversed = "";
    for (let i = ele.length - 1; i >= 0; i--) {
      reversed += ele[i];
    }

    if (ele === reversed) result.push(ele);
  })

  return result;
}

const words = ["racecar","hello","deified","world","level","programming","radar","civic","javascript"];
console.log(palindromesString(words));


// find image
function findImage(imgArr) {
  let result = [];

  imgArr.filter(path => {
    if (path.includes('.jpg') || path.includes('.png')) result.push(path);
  })

  return result;
}

const filePaths = ["/images/pic1.jpg", "/images/pic2.png", "/assets/img/background.jpg", "/assets/img/logo.png", "/downloads/document.pdf", "/downloads/image.png", "/downloads/image.jpg"];
console.log(findImage(filePaths));


// strings swapping
function stringsSwap(strArr) {
  return strArr.map(str => {
    let n = str.length;
    if (n <= 1) return str;

    return str[n-1] + str.slice(1, -1) + str[0]
  })
}

const strings = ["Hello", "world", "this", "is", "an", "example", "array", "of", "strings"];
console.log(stringsSwap(strings));


// words counting
function countWords(sentArr) {
  return sentArr.map((sentence, i) => {
    let count = 0;

    sentence.split(' ').forEach(word => {
      count++
    })

    return `sentence ${i+1} contains ${count} words`
  })
}

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];
console.log(countWords(sentences));


// sum of odd numbers squares
function sumOfOddSquaresFilter(numArr) {
  let sum = 0;
  numArr.filter(num => {
    if (num % 2 !== 0) {
      sum += num ** 2;
    }
  })
  return sum;
}

function sumOfOddSquaresMap(numArr) {
  let sum = 0;
  numArr.map(num => {
    if (num % 2 !== 0) sum += num ** 2;
  })
  return sum;
}

function sumOfOddSquaresReduce(numArr) {
  return numArr.reduce((acc, num) => {
    if (num % 2 !== 0) acc += num ** 2;

    return acc;
  }, 0)
}

const numbers = [1, 2, 3, 4, 5, 7];
console.log(sumOfOddSquaresFilter(numbers))
console.log(sumOfOddSquaresMap(numbers))
console.log(sumOfOddSquaresReduce(numbers))