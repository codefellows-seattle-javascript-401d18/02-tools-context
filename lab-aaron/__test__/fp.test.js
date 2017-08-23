'use strict';

const fp = require ('../lib/fp');

describe('Testing fp.js', function(){
  describe('#theMap:', () => {
    test('Should return numbers multiplied by three', () => {
      expect(fp.theMap([1, 2, 3], (num => num * 3))).toEqual([3, 6, 9]);
    });
  });
});

describe('Testing fp.js', function(){
  describe('#theFilter:', () => {
    test('Should return numbers greater than three', () => {
      expect(fp.theFilter([1, 2, 3, 4, 5, 6], (num => num >= 3))).toEqual([3, 4, 5, 6]);
    });
  });
});

describe('Testing fp.js', function(){
  describe('#theReduce:', () => {
    test('Should return to combined total of 3 values', () => {
      expect(fp.theReduce([1, 2, 3], ((prev, curr) => prev + curr), 0)).toEqual(6);
    });
  });
});

describe('Testing fp.js', function(){
  describe('#theConcat:', () => {
    test('Should return a concatinated string', () => {
      expect(fp.theConcat(['a', 'b'],['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});

describe('Testing fp.js', function(){
  describe('#theSplice:', () => {
    test('Should return array minus the last 3 arguments', () => {
      expect(fp.theSplice([1, 2, 3, 4, 5, 6], 0, 3)).toEqual([1, 2, 3]);
    });
  });
});
