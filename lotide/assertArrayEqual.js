const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
    //define two inputs
    //then compare
    // print
  }; 
  
  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) { 
      return false;
    } else
      for (let i = 0; i < array1.length; i++) {
       if (array1[i] !== array2[i]) {
         return false;
       } 
       else
       return true;
      }
    };
  
  
  // Test code:
  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1])// => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3])// => false
  
  //module.export = eqArray;