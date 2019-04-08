const { expect } = require('chai');
const runner = require('../src/problems/0005.js');

describe('Problem #5', function() {
  it('should satisfy example', function() {
    const input = 10;
    const expected = 2520;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
