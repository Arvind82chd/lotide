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

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function ({object}, value) {
  // console.log(Object.values(bestTVShowsByGenre));
  // console.log(Object.values(object));
  // console.log(Object.keys(bestTVShowsByGenre));
  //console.log(Object.keys(object));
   for (let obj in object) { //The value of object is not being picked by this code
    console.log(object.obj);
     if (value === Object.values(object)) {
      return Object.keys(object)
    }
  }
  
}




// Test cases:
// const bestTVShowsByGenre = { 
//     sci_fi: "The Expanse",
//     comedy: "Brooklyn Nine-Nine",
//     drama:  "The Wire"
//   };
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);