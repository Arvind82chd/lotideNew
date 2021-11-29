const findKey = function(object, callback) {

  for (let key in object) {
      if (callback(object[key])) {
          return key
      } 
  }
  return undefined; 
}





const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` ✅✅✅  Assertion Passes: ${actual} === ${expected}`);
    } else {
      console.log(` 🛑🛑🛑  Assertion Fails: ${actual} !== ${expected}`);
    }
  };



  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2),"noma");


  assertEqual(findKey({
    "a": [1, 2, 3],
    "b": 1,
    "c": 74,
    "d": 63,
    "e": 89,
    "f": 76
  }, x => x === 63),"d");

  assertEqual(findKey({
    "a": [1, 2, 3],
    "b": 1,
    "c": 74,
    "d": 63,
    "e": 89,
    "f": 76
  }, x => x[1] === 2), "a");

module.exports = findKey;