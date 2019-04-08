/*
https://projecteuler.net/problem=9
# Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.


*/

function test(input = 1000) {
  for (let a = 1; a < input / 2; a++) {
    for (let b = a; b < input / 2; b++) {
      let c = input - a - b;
      if (c > 0 && Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        return a * b * c;
      }
    }
  }
  return -1;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '9',
    url: 'https://projecteuler.net/problem=9',
    title: 'Special Pythagorean triplet',
    description:
      '\nA Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n a2 + b2 = c2\nFor example, 32 + 42 = 9 + 16 = 25 = 52.\nThere exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.\n\n',
  },
  run,
  test,
};
