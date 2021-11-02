const middle = function(array) {
  const i = array.length / 2;
 if (array.length % 2 === 0) {
    return [i, i+1];
 } else 
   return [Math.floor(i) + 1];
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

    console.log(
    middle([1])) // => []
    console.log(middle([1, 2])) // => []
    
    console.log(middle([1, 2, 3])) // => [2]
    console.log(middle([1, 2, 3, 4, 5])) // => [3]
    
    console.log(middle([1, 2, 3, 4])) // => [2, 3]
    console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

 // test assertion
 console.log(middle(assertArrayEqual([1, 2, 3, 4], [1, 2, 3]))); 
 console.log(middle(assertArrayEqual([1], [1, 2]))); 
 console.log(middle(assertArrayEqual([1, 2, 3], [1, 2, 3, 4, 5]))); 
 console.log(middle(assertArrayEqual([1, 2, 3, 4], [1, 2, 3, 5, 6]))); 
 console.log(middle(assertArrayEqual([1, 2, 3, 4], [1, 2, 3]))); 