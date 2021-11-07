// The second argument/parameter is expected to be a (callback) function
let index1 = '';
const findWaldo = function(names, found) {
    names.forEach(function (name, index) {
      if (name === "Waldo") {
        index1 = index;
        found();   // execute callback
      }
    });
  }
  
  const actionWhenFound = function() {
    console.log("Found him! at index:" + index1);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  //This code illustrates how a function can be treated as an ordinary value