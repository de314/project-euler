/*
https://projecteuler.net/problem=3
# Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

*/

function test(input = 600851475143) {
  const factors = [];
  while (input % 2 === 0) {
    factors.push(2);
    input /= 2;
  }
  for (let f = 3; f <= input; ) {
    if (input % f === 0) {
      factors.push(f);
      input /= f;
    } else {
      f += 2;
    }
  }
  return factors[factors.length - 1];
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '3',
    url: 'https://projecteuler.net/problem=3',
    title: 'Largest prime factor',
    description:
      '\nThe prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?\n\n\n',
  },
  run,
  test,
};
