'use-strict';

const fp = require('../lib/fp');


describe('fp', () => {
  describe('#map', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.map()).toThrowError('Array not provided for Map');
    });
    test('Should return an array with doubled numbers', () => {
      expect(fp.map([1,2,3,4], (n) => { return n * 2; })).toEqual([2,4,6,8]);
    });
  });

  describe('#filter', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.filter()).toThrowError('Array not provided for Filter');
    });
    test('Should return an array that is missing the number 4', () => {
      expect(fp.filter([1, 2, 3, 4], (n) => { return n !== 4; })).toEqual([1, 2, 3]);
    });
  });

  describe('#concat', () => {
    test('Should throw initial array not provided error', () => {
      expect(() => fp.concat()).toThrowError('Initial array not provided for Concat');
    });
    test('should return both arrays combined', () => {
      expect(fp.concat([1,2,3], [4,5,6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('#reduce', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.reduce()).toThrowError('Initial array not provided for Reduce');
    });
    test('should reduce an array down to a single value', () => {
      expect(fp.reduce([0, 1, 2, 3], (acc, n) => {return acc + n; }, 0)).toEqual(6);
    });
  });

  describe('#splice', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.splice()).toThrowError('Initial array not provided for Splice');
    });
    test('should reduce an array down to a single value', () => {
      expect(fp.splice([1,2,3,4,5,6,7,8], 5)).toEqual([6, 7, 8]);
    });
  });
});
