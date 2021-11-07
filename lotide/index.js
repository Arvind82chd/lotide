const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const countletters = require('./countletters');
const countOnly = require('./countOnly');
const eqArray   = require('./eqArray');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil   = require('./takeUntil');
const without = require('./without');
const map = require('./map');

module.exports = {
  head,
  tail,
  middle,
  assertArrayEqual,
  assertEqual,
  countletters,
  countOnly,
  eqArray,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  map,
  without
};