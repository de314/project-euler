/*
https://projecteuler.net/problem=2
# Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


*/

function test(input = 4000000) {
  let n0 = 0,
    n1 = 1,
    sum = 0;
  while (n0 + n1 < input) {
    let tmp = n0 + n1;
    if ((tmp & 1) === 0) {
      sum += tmp;
    }
    n0 = n1;
    n1 = tmp;
  }
  return sum;
}

function run() {
  return test();
}

module.exports = {
  info: {
    id: '2',
    url: 'https://projecteuler.net/problem=2',
    title: 'Even Fibonacci numbers',
    description:
      '\nEach new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.\n\n',
  },
  run,
  test,
};