// Custom Map => Mimics the functionality of the [Array.prototype.map] method, which creates a new array populated with the results of calling a provided function on every element.

Array.prototype.customMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};


// Custom Filter => Mimics the functionality of [Array.prototype.filter], which creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.customFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};


// Custom Reduce => Mimics the [Array.prototype.reduce], which executes a reducer function on each element of the array, resulting in a single output value.

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};


// Custom Push => Mimics [Array.prototype.push], which adds one or more elements to the end of an array.

Array.prototype.customPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
};


// Custom Pop => Mimics [Array.prototype.pop], which removes the last element from an array and returns that element.

Array.prototype.customPop = function () {
  if (this.length === 0) return undefined;
  const lastElement = this[this.length - 1];
  this.length = this.length - 1;
  return lastElement;
};


// Custom Slice => Mimics [Array.prototype.slice], which returns a shallow copy of a portion of an array into a new array object.

Array.prototype.customSlice = function (start, end) {
  const result = [];
  start = start || 0;
  end = end === undefined ? this.length : end;

  for (let i = start; i < end && i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(this[i]);
    }
  }
  return result;
};


// Usage
const arr = [1, 2, 3, 4, 5];

// Using custom higher-order functions
console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15

// Using custom methods
console.log(arr.customSlice(1, 3)); // Output: [2, 3]
console.log(arr.customPush(6, 7)); // Output: 7 [1, 2, 3, 4, 5, 6, 7]
console.log(arr.customPop()); // Output: 7 [1, 2, 3, 4, 5, 6]

