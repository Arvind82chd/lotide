const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
    }
    //define two inputs
    //then compare
    // print
  
  };
  function head(array){
    return (array && array.length) ? array[0] : undefined;
  }
  //Test Code
  assertEqual(head(["Hello", "Lighthouse Labs", "Labs"]), "hello");
  assertEqual(head ([5,6,7]), 5);
