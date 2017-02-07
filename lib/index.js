"use strict";

var reduce = function reduce(fn, arr) {
  return arr.reduce(fn, 0);
};

var add = function add(x, y) {
  return x + y;
};

// -- Sum Func ------------------ //

var sum = function sum(fn, from, to) {
  var total = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (from > to) return reduce(add, total);

  total.push(fn(from));
  return sum(fn, from + 1, to, total);
};

module.exports = sum;