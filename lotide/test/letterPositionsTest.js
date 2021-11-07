const assertObjectsEqual  = require('../assertObjectsEqual');
const letterPositions = require('../letterPositions');

const sentence = "This is a good day today.";
console.log(letterPositions(sentence));
assertObjectsEqual(letterPositions("hello"), {h:[0], e:[1], l:[2, 3], o: [4]});

