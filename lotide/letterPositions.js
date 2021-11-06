const sentence = "this is a good day.";
console.log()
const letterPositions = function(sentence) {
const results = {};
for (let letter in sentence) {
if (results[letter]) {
    console.log(letter);
    results[letter] += 1;
}
// logic to update results here
    return results;
}
    
};
console.log(letterPositions(sentence));

//   const string = "lighthouse in the house";
//   console.log(string);
//   const countLetters = function (string) {
//     let countObject = {};
  
//   for (let letter of string) {
//     if (letter !== " ") {
//       if (countObject[letter]) {
//         countObject[letter] = countObject[letter] + 1;
//       }
//       else 
//       {
//         countObject[letter] = 1;
//       }
//     }
    
//   }
//   return countObject
//   };