"use strict";

// -- Sum Func ------------------ //

var sum = function sum(fn, from, to) {
  var total = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  for (var x = from; x <= to; x += 1) {
    total += fn(x);
  }

  return total;
};

module.exports = sum;