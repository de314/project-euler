const { expect } = require('chai');
const runner = require('../src/problems/0010.js');

describe('Problem #10', function() {
  it('should satisfy example', function() {
    const input = 10;
    const expected = 17;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
