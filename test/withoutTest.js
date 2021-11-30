const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
    
    it(`return ["hello", "world"] for ["hello", "world", "lighthouse"], ["lighthouse"]`, () => {
        assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
    });

    it(`return [2, 3] for [1, 2, 3], [1]`, () => {
        assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    });

    it(`return ["1", "2"] for ["1", "2", "3"], [1, 2, "3"]`, () => {
        assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    });

});


// // Test Cases:
// assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);
