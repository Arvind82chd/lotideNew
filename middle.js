const middle = function(array) {
  let arrayLength = array.length;
  let midElement = Math.floor(arrayLength / 2);
  let middleArray = [];
  if (arrayLength === 1 || arrayLength === 2) {
    return [];
  } else if (arrayLength % 2 !== 0) {

    middleArray.push(array[midElement]);

  } else {

    middleArray.push(array[midElement - 1]);
    middleArray.push(array[midElement]);

  }
  return middleArray;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const assertArrayEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(` 🛑🛑🛑  Assertion Fails: ${array1} !== ${array2}`);
  } else {
    console.log(` ✅✅✅  Assertion Passes: ${array1} === ${array2}`);
  }
};
  
  
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    return true;
  }
};

// Test Cases:

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);