const head = function(array) {
  return array[0];
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passes: ${actual} === ${expected}`);
  } else {
    console.log(` 🛑🛑🛑  Assertion Fails: ${actual} !== ${expected}`);
  }
};


// Test Cases:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 9);
assertEqual(head(["Lighthouse", "Hello", "Labs"]), "Hello");
