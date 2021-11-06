const takeUntil = function(array, callbackPredicate) {
  for (let element of array) { //set counter
    if (callbackPredicate(element)) { // set condition
      return array.slice(0, array.indexOf(element)) // output / array.indexOf() needed for index of the element.
    }
  }
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
//assertArrayEqual(results1); //giving error in line 18 cannot read length.
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
//assertArrayEqual(results2); 
