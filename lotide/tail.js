function tail(assertEqual){
  return (assertEqual.splice(1, assertEqual.length - 1))
};

module.exports = tail;

