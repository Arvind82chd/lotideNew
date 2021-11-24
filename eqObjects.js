const eqObjects = function(object1, object2) {
    let objLength1 = Object.keys(object1).length;
    let objLength2 = Object.keys(object2).length;
    if (objLength1 !== objLength2) {
        return false;
    } else {
        for (let key in object1) {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
    }
    
    return true;
}



const assertEqual = function(actual, expected) {
if (actual === expected) {
    console.log(` ✅✅✅  Assertion Passes: ${actual} === ${expected}`);
} else {
    console.log(` 🛑🛑🛑  Assertion Fails: ${actual} !== ${expected}`);
}
};

// Test Cases:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);