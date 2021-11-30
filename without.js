const without = function(sourceArray, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < sourceArray.length; j++) {
      if (itemsToRemove[i] === sourceArray[j]) {
        sourceArray.splice(j, 1);
        return sourceArray;
      }
    }
  }
};


module.exports = without;