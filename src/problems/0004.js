/*
https://projecteuler.net/problem=4
# Largest palindrome product


A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.


*/

function isPalindrome(num) {
  num += '';
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function test(input = 3) {
  const min = Math.pow(10, input - 1);
  const max = Math.pow(10, input);
  let largestPalindrome = 0;
  for (let i = min; i < max; i++) {
    for (let j = min; j < i; j++) {
      if (isPalindrome(i * j)) {
        largestPalindrome = Math.max(largestPalindrome, i * j);
      }
    }
  }
  return largestPalindrome;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '4',
    url: 'https://projecteuler.net/problem=4',
    title: 'Largest palindrome product',
    description:
      '\n\nA palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers.\n\n',
  },
  run,
  test,
};
