const assertObjectsEqual = function(actualO, expectedO) {
  const inspect = require('util').inspect;
  if (!eqObjects(actualO, expectedO)) {
    console.log(` 🛑🛑🛑  Assertion Fails: ${actualO} !== ${expectedO}`);
  } else {
    console.log(` ✅✅✅  Assertion Passes: ${actualO} === ${expectedO}`);
  }
    
};


  
const eqObjects = function(object1, object2) {
  let objLength1 = Object.keys(object1).length;
  let objLength2 = Object.keys(object2).length;
  if (objLength1 !== objLength2) {
    return false;
  } else {
       
    for (let key in object1) {
      const value1 = object1[key];
      const value2 = object2[key];
      if (Array.isArray(value1)
          || Array.isArray(value2)) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
  }
  return true;
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

module.exports = assertObjectsEqual;

// Test Cases:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false