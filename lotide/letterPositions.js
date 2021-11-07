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


module.exports = letterPositions;