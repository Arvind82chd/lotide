const takeUntil = function(array, callbackPredicate) {
  for (let element of array) { //set counter
    if (callbackPredicate(element)) { // set condition
      return array.slice(0, array.indexOf(element)) // output / array.indexOf() needed for index of the element.
    }
  }
};

module.exports = takeUntil;
