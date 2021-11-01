const findWaldo = function(names, found) {  
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name === "Waldo") {
          found(i);   // execute callback
        }
      }
    }
    
    const actionWhenFound = function(index) {
      console.log(index);
    }
    
    findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
        console.log("Waldo is located at:", index);
      });  