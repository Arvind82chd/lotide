const assertEqual = function(actual, expected) { //define two inputs
  if (actual === expected) {  //then compare
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`); // print
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }
};

module.exports = assertEqual;
