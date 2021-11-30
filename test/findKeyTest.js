const findKey = require('../findKey');
const assert = require('chai').assert;

// Test Cases:

describe("#findKey", () => {
    it(`returns "noma" for ({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2)`, () => {
        assert.deepEqual(findKey({
            "Blue Hill": { stars: 1 },
            "Akaleri":   { stars: 3 },
            "noma":      { stars: 2 },
            "elBulli":   { stars: 3 },
            "Ora":       { stars: 2 },
            "Akelarre":  { stars: 3 }
          }, x => x.stars === 2),"noma");
    });

    it(`returns "a" for ({
        "a": [1, 2, 3],
        "b": 1,
        "c": 74,
        "d": 63,
        "e": 89,
        "f": 76
      }, x => x[1] === 2)`, () => {
        assert.deepEqual(findKey({
            "a": [1, 2, 3],
            "b": 1,
            "c": 74,
            "d": 63,
            "e": 89,
            "f": 76
          }, x => x[1] === 2), "a");
    });

    it(`returns "d" for ({
        "a": [1, 2, 3],
        "b": 1,
        "c": 74,
        "d": 63,
        "e": 89,
        "f": 76
      }, x => x === 63)`, () => {
        assert.deepEqual(findKey({
            "a": [1, 2, 3],
            "b": 1,
            "c": 74,
            "d": 63,
            "e": 89,
            "f": 76
          }, x => x === 63),"d");
    });

});

// assertEqual(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2),"noma");


//   assertEqual(findKey({
//     "a": [1, 2, 3],
//     "b": 1,
//     "c": 74,
//     "d": 63,
//     "e": 89,
//     "f": 76
//   }, x => x === 63),"d");

//   assertEqual(findKey({
//     "a": [1, 2, 3],
//     "b": 1,
//     "c": 74,
//     "d": 63,
//     "e": 89,
//     "f": 76
//   }, x => x[1] === 2), "a");