'use strict';

const fp = require('../lib/fp');
describe('fp.js', function() {
  describe('default properties', () => {
    test('should return each number multiplied by 2', ()=> {
      expect(fp.myMap([4,6,8],(num => num * 2))).toEqual([8,12,16]);
    });
    test('should return numbers greater or equal to 18', ()=> {
      expect(fp.myFilter([12,14,17,18,20],(num => num >= 18))).toEqual([18,20]);
    });
    test('should return', ()=> {
      expect(fp.myReduce([1,2,3,4,5],((num, value) => num + value),0)).toEqual(15);
    });
    test('should return', ()=> {
      expect(fp.myConcat(['a','b'],['c','d'])).toEqual(['a','b','c','d']);
    });
    test('should return', ()=> {
      expect(fp.mySplice([12,14,17,18,20],0,2)).toEqual([12,14]);
    });
  });
});
