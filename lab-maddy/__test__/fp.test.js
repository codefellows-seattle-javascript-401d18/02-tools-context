'use strict';

const fp = require('../lib/fp');

describe('fp.js', function(){
  describe('default properties',() =>  {
    test('should return...',() => {
      expect(fp.myMap([1, 2, 3],(num => num * 3))).toEqual([3, 6, 9]);
    });
    test('should return...',() => {
      expect(fp.myFilter([1, 2, 3, 4, 5, 6],(num => num >= 3))).toEqual([3, 4, 5, 6]);
    });
  });
});

// describe('#myMap:',() =>  {
//   test('should return...',() => {
//     expect(fp.myMap([1, 2, 3],(num => num * 3))).toEqual([3, 6, 9]);
// describe('#myMap:',() =>  {
//   test('should return...',() => {
//     expect(fp.myMap([1, 2, 3],(num => num * 3))).toEqual([3, 6, 9]);
