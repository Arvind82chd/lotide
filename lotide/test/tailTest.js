const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail(["Hello", "Lighthouse Labs", "Labs"]), "hello");
assertEqual(tail ([5,6,7]), 5);
