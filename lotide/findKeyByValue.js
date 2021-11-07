const findKeyByValue = function (object, value) { // previous issue because of using {object} instead of object.
  const keysArray = Object.keys(object);
    for (let key of keysArray) { // Clarity after refering a peer.
      if (object[key] === value) { 
      return key;
    }
  }
}

module.exports = findKeyByValue;


