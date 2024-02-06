const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2
};

const sum = function (array) {
  let counter = 0;
  array.forEach(element => counter += element)
  return counter;
};

const multiply = function (array) {
  return array.reduce((accumulator, element) =>
    accumulator * element
  );
};

const power = function (val1, val2) {
  return Math.pow(val1, val2);
};

const factorial = function (val) {
  if (val === 0) {
    return 1;
  }
  let counter = val;
  for (let i = val - 1; i > 0; i--) {
    counter *= i;
  }
  return counter;
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
