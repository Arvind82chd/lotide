
const eqArray = function(array1, array2) {
  if (array1.length !== array2.length) {
  return false;
  }
// Code by Alex Reyne: 
  for (let i = 0; i < array1.length; i++) {
    if(Array.isArray(array1[i]) && Array.isArray(array2.length[i])) {
      if (!eqArray(array1[i], array2[i])) {
        return false;
      }
    } 
    return true;
        /* for (let i = 0; i < array1.length; i++){
          for (let j = 0; j < array2.length; j++) {
          if ( i === j) { 
              if (array1[i] !== array2[j]) {
                return false; 
            } else {
                return true;
            } }*/
   }
            
}

module.export = eqArray;