const eqArrays = require('./eqArray');
const assertArrayEqual = function(array1, array2) { //define two inputs
  if (eqArrays(array1, array2)) {  //then compare
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`); // print
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }
}; 
  
module.exports = assertArrayEqual;