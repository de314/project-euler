const { expect } = require('chai');
const run0001 = require('../src/0001.js');

describe('0001', function() {
  it('should sum multiples < 10', function() {
    const actual = run0001.test(10);
    const expected = 23;
    expect(actual).to.eq(expected);
  });
});
