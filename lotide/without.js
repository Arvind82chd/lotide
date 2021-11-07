const without = function(source, itemToRemove) {
  for (let i = 0; i < itemToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemToRemove[i] === source[j]) {
        source.splice(j, 1);
        return source;
      } 
    } 
  }
}

module.exports = without