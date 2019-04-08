const { expect } = require('chai');
const runner = require('../src/problems/0002.js');

describe('Problem #2', function() {
  it('should satisfy example', function() {
    const input = 100;
    const expected = 44;
    const actual = runner.test(input);
    expect(actual).to.eq(expected);
  });
});
