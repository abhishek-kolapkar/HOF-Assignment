//palindrome string
function palindromesString(arr) {
  let result = [];

  arr.filter((ele) => {
    let reversed = "";
    for (let i = ele.length - 1; i >= 0; i--) {
      reversed += ele[i];
    }

    if (ele === reversed) result.push(ele);
  });

  return result;
}

const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
console.log(palindromesString(words));
