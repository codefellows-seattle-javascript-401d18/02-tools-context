'use strict';

const fp = require('../lib/fp');
//map, filter, reduce, concat, splice,
describe('Testing fp.js', function() {
  describe('#mapi', () => {
    test('Array to return values doubled', () => {
      expect(fp.mapi([1, 5, 10, 15], x => x * 2)).toEqual([2, 10, 20, 30])
    })
  })
  describe('#filteri', () => {
    test('Should return words greater than 6 in array', () => {
      expect(fp.filteri(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], (word => word.length > 6))).toEqual(['exuberant', 'destruction', 'present'])
    })
  })
  describe('#reducei', () => {
    test('Should return the sum off all numbers in array', () => {
      expect(fp.reducei([ 0, 1, 2, 3 ], ( acc, cur ) => acc + cur, 0)).toEqual(6);
    })
  })
  describe('#concati', () => {
    test('Should concatinate 2 arrays', () => {
      expect(fp.concati(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3]);
    })
  })
  describe('#splicei', () => {
    test('To cut array at starting at index 0 and cutting off at index 2', () => {
      expect(fp.splicei(['angel', 'clown', 'mandarin', 'sturgeon'], 0, 2)).toEqual(['angel', 'clown']);
    })
  })
})
