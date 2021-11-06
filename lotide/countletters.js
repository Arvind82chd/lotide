const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
    
  };

  const string = "lighthouse in the house";
  const countLetters = function (string) {
    let countObject = {};
  
  for (let letter of string) {
    if (letter !== " ") {
      if (countObject[letter]) {
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

console.log(countLetters(string));
