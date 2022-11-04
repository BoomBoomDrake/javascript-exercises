const add = function(...args) {
	let total = 0;
  args.forEach((num) => {
    total += num;
  })
  return total;
};

const subtract = function(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total -= args[i];
  }
  
  return total;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach((num) => {
    total += num;
  })
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach((num) => {
    total *= num;
  })
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	return (num === 0 || num === 1) ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
