/*
https://projecteuler.net/problem=7
# 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?


*/

function isPrime(primes, num) {
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

function test(input = 10001) {
  const primes = [2, 3];
  for (let i = 5; primes.length <= input; i += 2) {
    if (isPrime(primes, i)) {
      primes.push(i);
    }
  }
  return primes[input - 1];
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '7',
    url: 'https://projecteuler.net/problem=7',
    title: '10001st prime',
    description:
      '\nBy listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\nWhat is the 10 001st prime number?\n\n',
  },
  run,
  test,
};
