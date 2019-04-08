/*
https://projecteuler.net/problem=5
# Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


*/

function test(input = 20) {
  for (let i = input * (input - 1); true; i += input) {
    let canDiv = true;
    for (let j = 1; j <= input; j++) {
      canDiv = canDiv && i % j === 0;
    }
    if (canDiv) {
      return i;
    }
  }
  return -1;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '5',
    url: 'https://projecteuler.net/problem=5',
    title: 'Smallest multiple',
    description:
      '\n2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?\n\n',
  },
  run,
  test,
};
