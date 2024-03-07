const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const sum = function (array) {
  return array.reduce((acc, curVal) => acc + curVal, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curVal) => acc * curVal);
};

const power = function (val1, val2) {
  return val1 ** val2
};

const factorial = function (val) {
  if (val === 0) return 1;
  let answer = val;
  for (let i = val - 1; i > 0; i--) {
    answer *= i;
  }
  return answer;
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
