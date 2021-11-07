const eqObjects = require('./eqObjects') //import eqObjects
const assertObjectsEqual = function(actual, expected) { //define two inputs
const inspect = require('util').inspect;  //then compare / import util
  if (eqObjects(actual, expected)) {  
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);  // print
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } 
};

module.exports = assertObjectsEqual;