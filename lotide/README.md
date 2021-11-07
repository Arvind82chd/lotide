# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me with guidance of mentors and support of peers as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arvind.sharma/lotide`

**Require it:**

`const _ = require('@arvind.sharma/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: displays true or false if two arrays are equal.
* `function2(assertEqual)`: displays true or false if two elements are equal.
* `function3(assertObjectsEqual)`: displays true or false if two objects are equal. 
* `function4(countletters)`: Checks how many times a letter has repeated.
* `function5(countOnly)`: Compares two arrays and keeps the items from the desired array segregating the rest.
* `function6(eqArrays)`: Equates if two arerays are equal. 
* `function7(eqObjects)`: Equates if two objects are equal. 
* `function8(findKey)`: Compares an object with an element - key and displays its contents.
* `function9(findKeyByValue)`: Compares an object with an element - value and displays its key.
* `function10(head)`: Gives the first value in an array.
* `function11(letterPositions)`: Gives the count in form of an array for the number of times a letter appeared in a sentence.
* `function12(map)`: Connects the elements of a higher order function 
* `function13(middle)`: Gives the middle values of thier respective arrays. 
* `function14(tail)`: Gives the end part of an array. 
* `function15(takeUntil)`: Gives an array and a callback function to predicate the array size according to callback truthiness.  
* `function16(without)`: Compare two arrays and removes values as per the second array.
* `Respective test cases`: Attached test cases for all the above. 
