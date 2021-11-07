const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');

console.log(middle([1])) // => []
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