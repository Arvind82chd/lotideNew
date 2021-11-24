const flatten = function(nestedArray) {
  let flattenedArray = [];
  for (let element of nestedArray) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    }
  }
  return flattenedArray;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]


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

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);