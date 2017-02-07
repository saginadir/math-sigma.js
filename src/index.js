// -- Sum Func ------------------ //

const sum = (fn, from, to, total = 0) => {
  for(let x = from; x <= to; x += 1) {
    total += fn(x);
  }

  return total;
};

module.exports = sum;