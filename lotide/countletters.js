const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
    
  };

  const string = "lighthouse in the house";
  console.log(string);
  const countLetters = function (string) {
    let countObject = {};
  
  for (let letter of string) {
    if (letter !== " ") {
      if (countObject[letter]) {
        countObject[letter] = countObject[letter] + 1;
      }
      else 
      {
        countObject[letter] = 1;
      }
    }
    
  }
  return countObject
  };
/*
    let count = 1; // set count to 1 as letter already in string - from below
    for (let i = 0; i < x.length; i++) { // for dividing string into individual values
       // console.log(x[i]); // test above
        // now if x[0] !== x[1] move next
        // if x[0] !== x[2] move next
        // till x[0] !== x[x.length -1]
        for (let j = 0; j < x.length; j++) {
       // console.log(x[j]); // test
       
        if (i !== j) { // remove condition of checking own possition
            
            if (x[i] !== x[i+j]) {// compare the values
                return count
                }
                count = count + 1; //increment a count by one 
                return count;//
            }  console.log(x[i]+ ' appeared ' + count + ' times in this string.') //test
            
        }  
        
    }
    
 } */
 console.log(countLetters(string));