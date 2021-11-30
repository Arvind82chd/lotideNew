const assert = require('chai').assert;
const countOnly = require('../countOnly');
// Test Cases:

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  describe("#countOnly", () => {
      it(`return { Fang: 2, Jason: 1 } for firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
          assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
      });
  });
