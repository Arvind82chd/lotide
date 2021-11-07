const without = require('../without');
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

  //Test Code
without(["Lighthouse Labs", "Bootcamp"],["Bootcamp"]);
without([1,1], [1,'1']);
without(["Hello", "Hello"], ['Hello', "Hello"]);
without([1, 3], [1, 5]); 