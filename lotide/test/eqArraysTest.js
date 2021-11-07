const eqArrays = require('../eqArray');
const assertArrayEqual = require('../assertEqual');


// Test code:
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3])); 
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); 
assertArrayEqual(eqArrays["1", "2", "3"], ["1", "2", 3]); 
