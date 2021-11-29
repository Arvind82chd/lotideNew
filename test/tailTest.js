const tail = require('../tail');
const assert = require("chai").assert;


// Test Cases:

describe("#tail", () => {
    
    it(`return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

    it("return [6, 7] for [5, 6, 7]", () => {
        assert.deepEqual(tail([5, 6, 7]), [6, 7]);
    });

    it("return [] for []", () => {
        assert.deepEqual(tail([]), []);
    });

    it("return [] for [1]", () => {
        assert.deepEqual(tail([1]), []);
    });

    it(`return ["Lighthouse", "Labs"] for ["The", "Lighthouse", "Labs"]`, () => {
        assert.deepEqual(tail(["The", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
});
