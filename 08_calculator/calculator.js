const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++){
    total = total * arr[i];
  }
  return total;
};

const power = function(a, b) {
  let power = a;
  for (let i = 1; i < b; i++){
    power = power * a;
  }
  return power;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }

  total = num;
  for (let i = num - 1; i > 0; i--){
    total = total * i;
  }
  return total;
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
