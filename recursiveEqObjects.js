const makeSimpleObject = function(object) {
  for (let item in object) {
    if (typeof item === 'object') {
      makeSimpleObject(item);
    } else {
      console.log(item);
    }
  }
};

const eqObjects = function(object1, object2) {
  const simpleObject1 = makeSimpleObject(object1);
  const simpleObject2 = makeSimpleObject(object2);
  let objLength1 = Object.keys(simpleObject1).length;
  let objLength2 = Object.keys(simpleObject2).length;
  //console.log(Object.values(simpleObject1));
  //console.log(Object.values(simpleObject2));
  if (objLength1 !== objLength2) {
    return false;
  } else {
     
    for (let key in simpleObject1) {
      const value1 = simpleObject1[key];
      const value2 = simpleObject2[key];
      if (value1 !== value2) {
        return false;
         
      }
    }
  }
  return true;
};

module.exports = eqObjects;