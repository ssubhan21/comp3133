const { expect } = require('chai');
const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Tests', () => {
  describe('add()', () => {
    it('should return 7 when adding 5 and 2 (PASS)', () => {
      expect(add(5, 2)).to.equal(7);
    });

    it('should fail when expecting 8 from 5 + 2 (FAIL)', () => {
      expect(add(5, 2)).to.equal(8);
    });
  });

  describe('sub()', () => {
    it('should return 3 when subtracting 2 from 5 (PASS)', () => {
      expect(sub(5, 2)).to.equal(3);
    });

    it('should fail when expecting 5 from 5 - 2 (FAIL)', () => {
      expect(sub(5, 2)).to.equal(5);
    });
  });

  describe('mul()', () => {
    it('should return 10 when multiplying 5 by 2 (PASS)', () => {
      expect(mul(5, 2)).to.equal(10);
    });

    it('should fail when expecting 12 from 5 * 2 (FAIL)', () => {
      expect(mul(5, 2)).to.equal(12);
    });
  });

  describe('div()', () => {
    it('should return 5 when dividing 10 by 2 (PASS)', () => {
      expect(div(10, 2)).to.equal(5);
    });

    it('should fail when expecting 2 from 10 / 2 (FAIL)', () => {
      expect(div(10, 2)).to.equal(2);
    });
  });
});