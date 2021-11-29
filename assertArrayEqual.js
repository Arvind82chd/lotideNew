const eqArrays = require('./eqArrays');
const assertArrayEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(` 🛑🛑🛑  Assertion Fails: ${array1} !== ${array2}`);
  } else {
    console.log(` ✅✅✅  Assertion Passes: ${array1} === ${array2}`);
  }
};


module.exports = assertArrayEqual;

