const assertEqual = require('./assertEqual');
function head(assertEqual){
  return (assertEqual.splice(0, 1))};
module.exports = head;
  