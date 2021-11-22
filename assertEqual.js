const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅  Assertion Passes: " + actual + " === " + expected);
  } else {
    console.log(" 🛑🛑🛑  Assertion Fails: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 2);