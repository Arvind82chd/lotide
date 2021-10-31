const myArgs = process.argv.slice(2);
const diceRoller = function () { 
    for (let i = 0; i < myArgs; i++) {
    console.log("Rolled " + myArgs + " dice: " +(Math.floor(Math.random() * 6 + 1)));
    }
}
console.log(diceRoller());
