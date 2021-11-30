const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


// Test Cases:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {

    it("return true for (ab, ba)", () => {
        assert.deepEqual(eqObjects(ab, ba), true);
    });

    it("return false for (ab, abc)", () => {
        assert.deepEqual(eqObjects(ab, abc), false);
    });

    it("return true for (cd, dc)", () => {
        assert.deepEqual(eqObjects(cd, dc), true);
    });

    it("return true for (cd, cd2)", () => {
        assert.deepEqual(eqObjects(cd, cd2), false);
    });
})

// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba),true);


// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);


// eqObjects(cd, dc); // => true
// assertEqual(eqObjects(cd, dc), true);


// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);


// //----------recurcive testing:

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false