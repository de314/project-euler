/*
https://projecteuler.net/problem=6
# Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


*/

function test(input = 100) {
  let sum = 0;
  let sum_2 = 0;
  for (let i = 0; i <= input; i++) {
    sum += i;
    sum_2 += i * i;
  }
  return sum * sum - sum_2;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '6',
    url: 'https://projecteuler.net/problem=6',
    title: 'Sum square difference',
    description:
      '\nThe sum of the squares of the first ten natural numbers is,\n12 + 22 + ... + 102 = 385\nThe square of the sum of the first ten natural numbers is,\n(1 + 2 + ... + 10)2 = 552 = 3025\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.\n\n',
  },
  run,
  test,
};
