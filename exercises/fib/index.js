// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ========================= START: SOLUTION 1: ITERATIVE =========================
// function fib(n) {
//   const series = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     series.push(series[series.length - 1] + series[series.length - 2]);
//   }

//   return series[n];
// }
// ========================= END: SOLUTION 1: ITERATIVE =========================

// ========================= START: SOLUTION 2: MEMOIZED RECURSIVE =========================
// const memory = {};

// let counter = 0;

// function fib(n) {
//   if (n === 0 || n === 1) {
//     return BigInt(n);
//   }

//   counter++;

//   const fibMinusOne = memory[n - 1] || (memory[n - 1] = fib(n - 1));
//   const fibMinusTwo = memory[n - 2] || (memory[n - 2] = fib(n - 2));

//   return fibMinusOne + fibMinusTwo;
// }

// console.time('Fib');
// console.log(fib(5000));
// console.timeEnd('Fib');
// console.log(memory);
// console.log(counter);
// ========================= END: SOLUTION 2: MEMOIZED RECURSIVE =========================

// ========================= START: SOLUTION 3: MEMOIZED RECURSIVE =========================
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// console.time('Fib');
// console.log(fib(500));
// console.timeEnd('Fib');
// ========================= END: SOLUTION 3: MEMOIZED RECURSIVE =========================

module.exports = fib;
