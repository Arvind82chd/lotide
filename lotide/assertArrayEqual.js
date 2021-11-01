const {eqArrays} = require('./eqArray');
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
  
  
module.exports = assertArrayEqual;