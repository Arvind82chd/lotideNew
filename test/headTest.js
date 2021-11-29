const head = require('../head.js');
const assertEqual = require('../assertEqual');

// Test Cases:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 9);
assertEqual(head(["Lighthouse", "Hello", "Labs"]), "Hello");