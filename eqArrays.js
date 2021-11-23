const eqArrays = function(array1, array2) {
    // console.log('a1: '+ array1);
    // console.log(`a2: ${array2}`);
    // console.log(`ar1L: ${array1.length}`);
    // console.log(`ar2L: ${array2.length}`);
    if (array1.length !== array2.length) {
        console.log('f1: '+false);
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`f2: ${false}`);
            return false
        } console.log(true); 
         return true;
    }
}





const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` ✅✅✅  Assertion Passes: ${actual} === ${expected}`);
    } else {
      console.log(` 🛑🛑🛑  Assertion Fails: ${actual} !== ${expected}`);
    }
  };


// Test Cases:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false