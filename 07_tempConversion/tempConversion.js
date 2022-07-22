const ftoc = function(temp) {
  let value = ((temp - 32) * (5 / 9));

  return Math.round(value * 10) / 10; // return Math.round((temp - 32) * (5/9) * 10) / 10;
  
};

const ctof = function(temp) {
  let value = (temp * (9 / 5) + 32);

  return Math.round(value * 10) / 10; // return Math.round(((temp * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
