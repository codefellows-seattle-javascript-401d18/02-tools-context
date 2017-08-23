'use strict';

const fp = require('../lib/fp');

describe('fp.js', function(){
  describe('default properties',() =>  {
    test('should return the multiplication function to each number in the array which will return an array of 3,6 and 9.',() => {
      expect(fp.myMap([1, 2, 3],(num => num * 3))).toEqual([3, 6, 9]);
    });
    test('should return only the numbers that are more than or equal to 3, for an answer of 3, 4, 5, 6.',() => {
      expect(fp.myFilter([1, 2, 3, 4, 5, 6],(num => num >= 3))).toEqual([3, 4, 5, 6]);
    });
    test('should return an accumulator of each element in an array for a total of 6.',() => {
      expect(fp.myReduce([1, 2, 3],((prev, curr) => prev + curr),0)).toEqual(6);
    });
    test('should return a concatenation of the two arrays to one array equal to a, b, c, d',() => {
      expect(fp.myConcat(['a', 'b'],['c','d'])).toEqual(['a', 'b', 'c', 'd']);
    });
    test('should return the first two values in the array',() => {
      expect(fp.mySplice([1, 2, 3, 4],0,2)).toEqual([1,2]);
    });
  });
});
