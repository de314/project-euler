const { expect } = require('chai');
const runner = require('../src/problems/0003.js');

describe('Problem #3', function() {
  it('should satisfy example', function() {
    const input = 13195;
    const expected = 29;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
