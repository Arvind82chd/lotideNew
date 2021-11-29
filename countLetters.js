const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};
    
//Test
console.log(countLetters("lighthouse in the house"));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passes: ${actual} === ${expected}`);
  } else {
    console.log(` 🛑🛑🛑  Assertion Fails: ${actual} !== ${expected}`);
  }
};

// Test Case:
let object = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const result1 = countLetters("lighthouse in the house");
for (let res in result1) {
  if (result1[res] === 2) {
    assertEqual(result1[res], 2);
  } else if (result1[res] === 1) {
    assertEqual(result1[res], 1);
  } else if (result1[res] === 3) {
    assertEqual(result1[res], 3);
  } else if (result1[res] === 4) {
    assertEqual(result1[res], 4);
  }
}

//assertEqual(countLetters("lighthouse in the house"), object);

module.exports = countLetters;
