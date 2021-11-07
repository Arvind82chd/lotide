const countLetters = function (string) {
  let countObject = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (countObject[letter]) { // condition to check if letter repeated.
        countObject[letter] += 1;
      }
      else 
      {
        countObject[letter] = 1;
      }
    }
  }
  return countObject
};


module.exports = countLetters;