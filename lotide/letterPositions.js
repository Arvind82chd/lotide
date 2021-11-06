const sentence = "This is a good day today.";
const letterPositions = function(sentence) {
  const results = {};
  for (let l = 0; l <= sentence.length; l++){
      
    if(sentence[l]!==" "){ //This if condition is to not to evaluate the blank spaces 
      if(results[sentence[l]]){ //sentence[l] = "a"
        results[sentence[l]].push(l); // for sending repeating values to results{}
      } else {
        results[sentence[l]] = [l]; // for sending first value to results{}
      }
    }
   } 
  return results;   
};


// const assertObjects  = function(passed, expected){
  
// }
    
console.log(letterPositions(sentence));
//assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2, 3], o: [4]});