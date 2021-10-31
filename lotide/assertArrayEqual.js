const assertArrayEqual = function(array1, array2) {
    if (eqArray(array1,array2) === true ) {
    console.log(`🟢🟢🟢 Assertion Passed: [array1] !== [array2]`);
    } else {
    console.log(`🔴🔴🔴 Assertion Failed: [array1] !== [array2]`); }
}

const eqArray = function(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
       const someArray = [];
         for (let j = 0; j < array2.length; j++) {
            if ( i === j) {
                if (array1[i] !== array2[j]) {
                    someArray.push(false); 
                    //break;
                } /*else {
                    someArray.push(true);
                }*/
            }
            //  finalSource.push(source);
        } console.log(someArray);
    } 
}

eqArray([1,2,3], [1,2,3]);
eqArray([2,1,3], [1,2,3]); /*
    //console.log(source);// return source elements that are not in itemToRemove
    assertArrayEqual([1, 2, 3], [1]) // => [2, 3]
    assertArrayEqual(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
    
     //Test Code
    assertArrayEqual(["Lighthouse Labs", "Bootcamp"],["Bootcamp"]);
    assertArrayEqual([1,1], [1,'1']);
    assertArrayEqual(["Hello", "Hello"], ['Hello', "Hello"]);
    assertArrayEqual([1, 3], [1, 5]); */