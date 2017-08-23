'use-strict';

const fp = require('../lib/fp');


describe('fp', () => {
  describe('#map', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.map()).toThrowError('No array provided for map function');
    });
    test('Should return an array with a *2 to each element', () => {
      expect(fp.map([1,2,3,4])).toEqual([2,4,6,8]);
    });
  });

  describe('#filter', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.filter()).toThrowError('No array provided for filter function');
    });
    test('Should return an array that removes the last number, 4', () => {
      expect(fp.filter([1, 2, 3, 4])).toEqual([1, 2, 3]);
    });
  });

  describe('#concat', () => {
    test('Should throw initial array not provided error', () => {
      expect(() => fp.concat()).toThrowError('No array provided for concat function');
    });
    test('Should return a combined array from twoo', () => {
      expect(fp.concat([1,2,3], [4,5,6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('#reduce', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.reduce()).toThrowError('No array provided for reduce function');
    });
    test('should reduce an array down to a single value', () => {
      expect(fp.reduce([0, 1, 2, 3], (acc, n) => {return acc + n; }, 0)).toEqual(6);
    });
  });

  describe('#splice', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.splice()).toThrowError('No array provided for splice function');
    });
    test('should delete items from an array', () => {
      expect(fp.splice([1,2,3,4,5,6,7,8], 5)).toEqual([6, 7, 8]);
    });
  });
});
