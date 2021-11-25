const takeUntil = function(array, callback) {
    let returnArray = [];
    for (let element of array) {
        if (!callback(element)) {
          returnArray.push(element);
        } else {
            break;
        }
    }
    return returnArray;
}

const assertArrayEqual = function(array1, array2) {
    if (!eqArrays(array1, array2)) {
      console.log(` 🛑🛑🛑  Assertion Fails: ${array1} !== ${array2}`);
    } else {
      console.log(` ✅✅✅  Assertion Passes: ${array1} === ${array2}`);
    }
  };
  
  
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    return false;
    }
    return true;
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
assertArrayEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);