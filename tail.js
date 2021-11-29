const tail = function(array) {
  let i = array.length;
  return array.splice(1, (i - 1));
};


module.exports = tail;

