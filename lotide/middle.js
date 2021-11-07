const middle = function(array) {
  const i = array.length / 2;
 if (array.length % 2 === 0) {
    return [i, i+1];
 } else 
   return [Math.floor(i) + 1];
};

module.exports = middle;
 