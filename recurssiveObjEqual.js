const eqObjects = function(object1, object2) {
    let objLength1 = Object.keys(object1).length;
    let objLength2 = Object.keys(object2).length;

    if (objLength1 !== objLength2) {
      return false;
    } else {
       
      for (let key in object1) {
        const value1 = object1[key];
        const value2 = object2[key];
        if (Array.isArray(value1)
          || Array.isArray(value2)) {
          eqArrays(value1, value2);
        } else {
          if (value1 !== value2) {
            return false;
          }
        }
      }
    }
    return true;
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

//----------recurcive testing:

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false