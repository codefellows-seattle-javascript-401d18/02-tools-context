'use strict';

const fp = require('../lib/fp');

describe('Testing: fp.js', function () {
  describe('#mapMeth:', () => {
    test('Should return array values doubled:', () => {
      expect(fp.mapMeth([2, 4, 6, 8], (num => num * 2))).toEqual([4, 8, 12, 16]);
    });
  });
  describe('#filterMeth:', () => {
    test('Should return array [i, am, the, kh]:', () => {
      expect(fp.filterMeth(['i', 'what', 'bleep', 'am', 'the', 'kh'], (word => word.length < 4))).toEqual(['i', 'am', 'the', 'kh']);
    });
  });
  describe('#reduceMeth:', () => {
    test('Should return the sum of all values in the array:', () => {
      expect(fp.reduceMeth([2, 4, 6, 8], ((sum, value) => sum + value),0)).toEqual(20);
    });
  });
  describe('#concatMeth:', () => {
    test('Should return one array that is the concatination of two arrays:', () => {
      expect(fp.concatMeth(['a', 'b', 'c'], ['d', 'e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
  });
  describe('#spliceMeth:', () => {
    test('Should return array [green alien dino]:', () => {
      expect(fp.spliceMeth(['green', 'alien', 'dino', 'grilled cheese', 'apple'], [0, 3])).toEqual(['green', 'alien', 'dino']);
    });
  });
});
