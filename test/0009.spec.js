const { expect } = require('chai');
const runner = require('../src/problems/0009.js');

describe('Problem #9', function() {
  it('should satisfy example', function() {
    const input = 12;
    const expected = 60;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
