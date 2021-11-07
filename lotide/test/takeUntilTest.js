const takeUntil = require('../takeUntil');
const assertObjectsEqual = require('../assertObjectsEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertObjectsEqual(results1); //giving error in line 18 cannot read length.
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertObjectsEqual(results2); 


/////// mocha & chai

describe('Array', function() {
    // Further code for tests goes here
  });

  var assert = chai.assert;

  describe('Array', function() {
    it('should start empty', function() {
      var arr = [];
  
      assert.equal(arr.length, 0);
    });
  });