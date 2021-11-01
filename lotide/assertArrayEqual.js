const eqArrays = require('../eqArrays');

const assertArrayEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
    //define two inputs
    //then compare
    // print
  }; 
  
  // Test code:
  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1])// => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3])// => false
  
module.export = eqArrays;