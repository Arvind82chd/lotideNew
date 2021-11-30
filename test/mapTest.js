const map = require('../map');
const assert = require('chai').assert;

// Test Cases:

describe("#map", () => {
    it(`returns [ 6, 7, 2, 5, 3 ] for (["ground", "control", "to", "major", "tom"], word => word.length)`, () => {
        assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word.length), [ 6, 7, 2, 5, 3 ]);
    });

    it(`returns [ 'g', 'c', 't', 'm', 't' ] for (["ground", "control", "to", "major", "tom"], word => word[0])`, () => {
        assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
    });

    it(`returns [ 'r', 'o', 'o', 'a', 'o' ] for (["ground", "control", "to", "major", "tom"], word => word[1])`, () => {
        assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
    });

});



