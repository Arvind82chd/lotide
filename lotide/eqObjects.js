

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


const eqObjects = function(object1, object2) {
    // for (let obj1 in object1){
    //     for (let obj2 in object2) {
    //         if (obj1 !== obj2) {
            
    //         }
    //                 }
    //             }
    const keysList1 = Object.keys(object1);
    const keysList2 = Object.keys(object2);
    console.log("keysList1", keysList1);
    console.log("keysList2", keysList2);
    if (keysList1.length !== keysList2.length) {
        return false;
    }
    for (let key of keysList1) {
        const value1 = object1[key];
        const value2 = object2[key];
        if (Array.isArray(value1) || Array.isArray(value2)) {       
            if (!eqArrays(value1, value2)) {         
                return false;       
            }     
        } else { 
        if (value1 !== value2) {     
             return false;      
            }    
        }  
    }   
    return true;
};


console.log(eqObjects(ab, ba));
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
    //define two inputs
    //then compare
    // print
};
console.log(assertObjectsEqual(ab, ba));
//=> true

console.log(assertObjectsEqual(ab, abc));
// => false
console.log(assertObjectsEqual(cd, dc)); // => true

console.log(assertObjectsEqual(cd, cd2)); // => false

