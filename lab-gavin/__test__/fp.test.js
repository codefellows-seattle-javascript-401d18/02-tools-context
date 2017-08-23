'use-strict';

const fp = require('../lib/fp');


describe('fp', () => {
  describe('#map', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.myMap()).toThrowError('Array not provided for Map');
    });
    test('Should return an array with doubled numbers', () => {
      expect(fp.myMap([1,2,3,4], (n) => { return n * 2; })).toEqual([2,4,6,8]);
    });
    test('Should return an array with original numbers square root', () => {
      expect(fp.myMap([36, 81, 9, 16], Math.sqrt)).toEqual([6,9, 3, 4]);
    });
  });


  describe('#filter', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.myFilter()).toThrowError('Array not provided for Filter');
    });
    test('Should return an array that is missing the number 4', () => {
      expect(fp.myFilter([1, 2, 3, 4], (n) => { return n !== 4; })).toEqual([1, 2, 3]);
    });
    test('Should return an array that is missing the name Gavin', () => {
      expect(fp.myFilter(['Gavin', 'Kimmer'], (n) => { return n !== 'Gavin'; })).toEqual(['Kimmer']);
    });
  });

  describe('#concat', () => {
    test('Should throw array not provided error', () => {
      expect(() => fp.myConcat()).toThrowError('Initial array not provided for Concat');
    });
    test('should return both arrays combined', () => {
      expect(fp.myConcat([1,2,3], [4,5,6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('should return both arrays combined', () => {
      expect(fp.myConcat(['Gavin', 'Alex'], ['Kimmer'])).toEqual(['Gavin', 'Alex', 'Kimmer']);
    });
  });

  describe('#reduce', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.myReduce()).toThrowError('Initial array not provided for Reduce');
    });
    test('should reduce an array down to a single value', () => {
      expect(fp.myReduce([0, 1, 2, 3], (acc, n) => {return acc + n; }, 0)).toEqual(6);
    });
  });

  describe('#splice', () => {
    test('should throw an initial array not provided error', () => {
      expect(() => fp.mySplice()).toThrowError('Initial array not provided for Splice');
    });
    test('should reduce an array down to a single value', () => {
      expect(fp.mySplice([1,2,3,4,5,6,7,8], 5)).toEqual([6, 7, 8]);
    });
  });
});
