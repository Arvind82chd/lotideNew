const without = function(sourceArray, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < sourceArray.length; j++) {
      if (itemsToRemove[i] === sourceArray[j]) {
        sourceArray.splice(j, 1);
        return sourceArray;
      }
    }
  }
};


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
assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;