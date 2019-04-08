/*
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function test(max = 1000) {
  let sum = 0;
  for (let i = 3; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: 1,
    title: 'Multiples of 3 and 5',
    description: `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\nFind the sum of all the multiples of 3 or 5 below 1000.`,
    url: 'https://projecteuler.net/problem=1',
  },
  run,
  test,
};
