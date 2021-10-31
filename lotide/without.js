const without = function(source, itemToRemove) {
  for (let i = 0; i < itemToRemove.length; i++) {
   const finalSource = [];
    for (let j = 0; j < source.length; j++) {
      if (itemToRemove[i] === source[j]) {
          source.splice(j, 1);
          finalSource.push(source);
      } 
    } 
    console.log(finalSource);
  }
  //console.log(source);// return source elements that are not in itemToRemove
}
  without([1, 2, 3], [1]) // => [2, 3]
  without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
  
   //Test Code
  without(["Lighthouse Labs", "Bootcamp"],["Bootcamp"]);
  without([1,1], [1,'1']);
  without(["Hello", "Hello"], ['Hello', "Hello"]);
  without([1, 3], [1, 5]); 