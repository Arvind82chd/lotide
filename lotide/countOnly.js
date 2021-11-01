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

  // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (i = 0; i < allItems.length; i++) {
        console.log(allItems[i]);
        if (itemsToCount[allItems[i]]) {
        if (results[allItems[i]]) {
            results[allItems[i]] += 1;
        } else {
            results[allItems[i]] = 1;
        }
    }
        }
        return results;
 }


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);


  
  //Test Code
countOnly(["Lighthouse Labs", "Bootcamp"],[1]);
  countOnly([1,1], [3,2]);
countOnly(["Hello", "Hello"], [2]);
countOnly(1, 3); 