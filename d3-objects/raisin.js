
const raisinAlarm = function(cookie) { 
  for (const cookieIndex of cookie) {
          if (cookieIndex === "🍇") {
        return "Raisin alert!"
      } 
    } 
   return "All good!"
  } 

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  let newArray = []; 
    for (const cookieIndx1 of cookies ) {
      if (cookieIndx1.includes("🍇")) {
      newArray.push("Raisin Alert");
    } 
     else { 
      newArray.push("All Good!")
     }
    }
    return newArray 
  
} 
      // Put your solution here
  
  


  console.log(raisinAlarmArray(
    [
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"]
    ]
  ));