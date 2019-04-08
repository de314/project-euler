const { expect } = require('chai');
const runner = require('../src/problems/0007.js');

describe('Problem #7', function() {
  it('should satisfy example', function() {
    const input = 6;
    const expected = 13;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
