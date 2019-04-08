const { expect } = require('chai');
const runner = require('../src/problems/0008.js');

describe('Problem #8', function() {
  it('should satisfy example', function() {
    const input = 4;
    const expected = 5832;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
