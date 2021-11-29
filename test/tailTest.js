const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Cases:
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const result1 = tail([5,6,7]);
assertEqual(result1.length, 3);
assertEqual(result1[0], 5);
assertEqual(result1[1], 6);

const result2 = tail([5,6,7]);
assertEqual(result2.length, 2);
assertEqual(result2[0], 6);
assertEqual(result2[1], 7);

const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);

const oneValueArr = tail([1]);
assertEqual(oneValueArr.length, 0);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
