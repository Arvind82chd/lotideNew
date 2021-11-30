const assert = require("chai").assert;
const takeUntil = require('../takeUntil');

// Test Cases:

describe("#takeUntil", () => {
    
    it(`return [ 1, 2, 5, 7, 2 ] for ([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)`, () => {
        assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
    });

    it(`return [ "I've", 'been', 'to', 'Hollywood' ] for (["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ",")`, () => {
        assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ","), [ "I've", 'been', 'to', 'Hollywood' ]);
    });

});
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ",");
// assertArrayEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

