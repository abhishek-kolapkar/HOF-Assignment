function calculateTotalExpences(obj) {
  // Write code here
  let result = obj.reduce((acc, ele) => acc += ele.amount, 0)

  return result;
}

const expences = [
  { name: "Food", amount: 50 },
  { name: "Transportation", amount: 30 },
  { name: "Internet", amount: 45 },
  { name: "Groceries", amount: 80 },
];

const totalExpences = calculateTotalExpences(expences);
console.log(totalExpences);
