const { expect } = require('chai');
const run0001 = require('../src/problems/0001.js');

describe('Problem #1', function() {
  it('should satisfy example', function() {
    const actual = run0001.test(10);
    const expected = 23;
    expect(actual).to.eq(expected);
  });
});
