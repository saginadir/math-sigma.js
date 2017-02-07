const reduce = (fn, arr) => arr.reduce(fn, 0);

const add = (x, y) => x + y;

// -- Sum Func ------------------ //

const sum = (fn, from, to, total = []) => {
  if ( from > to ) return reduce(add, total);

  total.push(fn(from));
  return sum(fn, from + 1, to, total);
};

module.exports = sum;