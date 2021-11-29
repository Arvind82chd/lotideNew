const middle = function(array) {
  let arrayLength = array.length;
  let midElement = Math.floor(arrayLength / 2);
  let middleArray = [];
  if (arrayLength === 1 || arrayLength === 2) {
    return [];
  } else if (arrayLength % 2 !== 0) {

    middleArray.push(array[midElement]);

  } else {

    middleArray.push(array[midElement - 1]);
    middleArray.push(array[midElement]);

  }
  return middleArray;
};


module.exports = middle;

