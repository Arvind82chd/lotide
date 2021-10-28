const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }
  };
  
  function tail(assertEqual){
    return (assertEqual.splice(1, assertEqual.length - 1)  
    )};
  
  //Test Code
  assertEqual(tail(["Hello", "Lighthouse Labs", "Labs"]), "hello");
  assertEqual(tail ([5,6,7]), 5);
