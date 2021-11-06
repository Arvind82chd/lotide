const sentence = "This is a good day today.";
const letterPositions = function(sentence) {
const results = {};
let key = "";
for (let letter of sentence) {
  if (letter !== " ") {
  for (i = 0; i < letter.length; i++) {
    key = letter[i]; 
        //  return i;
  }
 }
    //console.log();
    
    //results[letter] = [firstindex]
   // results[letter].push(letter);
    console.log(results[letter]); 
} 

return results;   
};
// for (let letter of string) {
//     if (letter !== " ") {
//       if (countObject[letter]) { // condition to check if letter repeated.
//         countObject[letter] += 1;
//       }
//       else 
//       {
//         countObject[letter] = 1;
//       }
//     }
//   }
//   return countObject 

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { 
  return false;
  } else
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
      return false;
      } 
      else
      return true;
    }
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }

}; 
    
console.log(letterPositions(sentence));
//assertArraysEqual(letterPositions("hello"), [1]);