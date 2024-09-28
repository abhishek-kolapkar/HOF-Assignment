// words counting
function countWords(sentArr) {
  return sentArr.map((sentence, i) => {
    let count = 0;

    sentence.split(" ").forEach((word) => {
      count++;
    });

    return `sentence ${i + 1} contains ${count} words`;
  });
}

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];
console.log(countWords(sentences));
