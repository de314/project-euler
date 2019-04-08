const { expect } = require('chai');
const runner = require('../src/problems/0006.js');

describe('Problem #6', function() {
  it('should satisfy example', function() {
    const input = 10;
    const expected = 2640;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
