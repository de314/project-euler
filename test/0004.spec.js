const { expect } = require('chai');
const runner = require('../src/problems/0004.js');

describe('Problem #4', function() {
  it('should satisfy example', function() {
    const input = 2;
    const expected = 9009;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
