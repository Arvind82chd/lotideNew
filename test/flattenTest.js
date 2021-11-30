const assertArrayEqual = require('../assertArrayEqual');
const flatten = require('../flatten');

// Test Cases:

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);