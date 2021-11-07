const {assertEqual} = require('../assertEqual');
const {countOnly} = require('../countOnly');
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
    
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



countOnly(["Lighthouse Labs", "Bootcamp"],[1]);
countOnly([1,1], [3,2]);
countOnly(["Hello", "Hello"], [2]);
countOnly(1, 3); 
