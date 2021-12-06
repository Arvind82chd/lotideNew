

const makeSimpleArray = function(array) {
  let tempArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      makeSimpleArray(item);
    } else {
      console.log(item);
      tempArray.push(item);
    }
  } return tempArray;
};

const recursiveEqArrays = function(array1, array2) {
  const simpleArray1 = makeSimpleArray(array1);
  const simpleArray2 = makeSimpleArray(array2);

  if (simpleArray1.length !== simpleArray2.length) {
    return false;
  }
  for (let i = 0; i < simpleArray1.length; i++) {
    if (simpleArray1[i] !== simpleArray2[i]) {
      return false;
    }
    
  } return true;
};

// console.log(recursiveEqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

// console.log(recursiveEqArrays([[2, 3], [4]], [2, 3], [4, 5])); // => false
// console.log(recursiveEqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = recursiveEqArrays;