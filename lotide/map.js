const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) { //can't remmember when I did this.
   const results = [];
   for (let item of array) {
      results.push(callback(item));
   }
   return results;
} 

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

const results = map(words, word => word[0]);
console.log(results);
//assertArrayEqual(results);

