const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};
    


module.exports = countLetters;
