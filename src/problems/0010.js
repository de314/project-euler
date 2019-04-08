/*
https://projecteuler.net/problem=10
# Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.




*/

function isPrime(primes, num) {
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

function test(input = 2000000) {
  const primes = [2, 3];
  let sum = 2 + 3;
  for (let i = 5; i < input; i += 2) {
    if (isPrime(primes, i)) {
      primes.push(i);
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
    id: '10',
    url: 'https://projecteuler.net/problem=10',
    title: 'Summation of primes',
    description:
      '\nThe sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\nFind the sum of all the primes below two million.\n\n\n\n',
  },
  run,
  test,
};
