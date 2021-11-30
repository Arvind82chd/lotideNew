const flatten = function(nestedArray) {
  let flattenedArray = [];
  for (let element of nestedArray) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    }
  }
  return flattenedArray;
};




module.exports = flatten;