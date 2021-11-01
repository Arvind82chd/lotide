const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

eqArray([1,2,3], [1,2,3]);
eqArray([2,1,3], [1,2,3]);