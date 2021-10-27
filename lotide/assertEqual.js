const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: [actual] === [expected]");
  } else {
    console.log("🔴🔴🔴 Assertion Failed: [actual] !== [expected]");
  }
  //define two inputs
  //then compare
  // print

};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Hello", "Hello");
assertEqual(1, 3);