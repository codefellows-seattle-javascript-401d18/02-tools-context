'use strict';

const fp = require('../lib/fp');
//map, filter, reduce, concat, splice,
describe('Testing fp.js', function() {
  describe('#mapi', () => {
    test('Array to return values doubled', () => {
      expect(fp.mapi([1, 5, 10, 15], x => x * 2)).toEqual([2, 10, 20, 30])
    })
    test('Non-array should return "This is not an array"', () => {
      expect(fp.mapi((1, 5, 10, 15), x => x * 2)).toEqual('This is not an array')
    })
    test('Should return length of every string', () => {
      expect(fp.mapi(['hello', 'there', 'my', 'name', 'is', 'Isaac'], x => x.length)).toEqual([5, 5, 2, 4, 2, 5])
    })
  })
  describe('#filteri', () => {
    test('Should return words greater than 6 in array', () => {
      expect(fp.filteri(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], (word => word.length > 6))).toEqual(['exuberant', 'destruction', 'present'])
    })
    test('Non-array should return "This is not an array"', () => {
      expect(fp.filteri('destruction', word => word.length > 6)).toEqual('This is not an array')
    })
    test('Should return all even numbers in array', () => {
      expect(fp.filteri([8,6,7,5,3,0,9], num => num%2 === 0)).toEqual([8,6,0])
    })
  })
  describe('#reducei', () => {
    test('Should return the sum off all numbers in array', () => {
      expect(fp.reducei([ 0, 1, 2, 3 ], ( acc, cur ) => acc + cur, 0)).toEqual(6);
    })
    test('Non-array should return "This is not an array"', () => {
      expect(fp.reducei()).toEqual('This is not an array')
    })
    test('Should return string "supercalifragilisticexpialidocious"', () => {
      expect(fp.reducei(['super', 'cali', 'fragil', 'istic', 'expiali', 'docious'], ( acc, cur ) => acc + cur)).toEqual('supercalifragilisticexpialidocious')
    })
  })
  describe('#concati', () => {
    test('Should concatinate 2 arrays', () => {
      expect(fp.concati(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3]);
    })
    test('Non-arrays should return "One or both of these args are not arrays"', () => {
      expect(fp.concati('c', 3)).toEqual('One or both of these args are not arrays')
    })
    test('Should concatinate two arrays of numbers', () => {
      expect(fp.concati([456, 457, 459], [487, 486, 484])).toEqual([456, 457, 459, 487, 486, 484])
    })
  })
  describe('#splicei', () => {
    test('To cut array at starting at index 0 and cutting off at index 2', () => {
      expect(fp.splicei(['angel', 'clown', 'mandarin', 'sturgeon'], 0, 2)).toEqual(['angel', 'clown']);
    })
    test('Non-array should return "This is not an array"', () => {
      expect(fp.splicei('angel', 0, 5)).toEqual('This is not an array')
    })
    test('', () => {
      expect(fp.splicei(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 2)).toEqual(['mandarin', 'sturgeon'])
    })
  })
})
