const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let objLength1 = Object.keys(object1).length;
  let objLength2 = Object.keys(object2).length;
  //console.log(Object.values(object1));
  //console.log(Object.values(object2));
  if (objLength1 !== objLength2) {
    return false;
  } else {
     
    for (let key in object1) {
      const value1 = object1[key];
      const value2 = object2[key];
      if (Array.isArray(value1)
        || Array.isArray(value2)) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;