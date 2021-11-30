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
};

module.exports = takeUntil;