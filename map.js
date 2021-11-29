const map = function(array, callback) {
  
  let newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }
  return newArray;
}




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

const words = ["ground", "control", "to", "major", "tom"];

const results = map(words, word => word.length);
assertArrayEqual(results, [ 6, 7, 2, 5, 3 ]);

const results1 = map(words, word => word[0]);
assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word[1]);
assertArrayEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);

module.exports = map;