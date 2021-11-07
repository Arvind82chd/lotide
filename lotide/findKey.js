const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {   // for iteration making an array of object key
    if (callback(object[key])) { // object[key] gives the value instead of key
      return key; // when above is true we send the value of key.
      }
    }
};

module.exports = findKey;