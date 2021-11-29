const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//console.log(letterPositions("hello").e, [1]);

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
assertArrayEqual(letterPositions("hello").e, [1]);
assertArrayEqual(letterPositions("hello world").l, [2,3,9]);
assertArrayEqual(letterPositions("lighthouse in the house").h, [3,5,15,17]);

module.exports = letterPositions;