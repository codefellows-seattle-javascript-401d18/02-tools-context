'use strict';

const fp = require('../lib/fp.js');

describe('fp.js', function(){
  describe('#mapDeal', () =>{
    test('should be array * 2', () =>{
      expect(fp.mapDeal([1, 2, 3], (i) => {return i * 2;})).toEqual([2, 4, 6]);
    });
  });
});

describe('fp.js', function(){
  describe('#filterDeal', () =>{
    test('should filter out 1, 2', () =>{
      expect(fp.filterDeal([1, 2, 3], (num) => {return num > 2;})).toEqual([3]);
    });
  });
});

describe('index.js', function(){
  describe('#reduceDeal', () =>{
    test('should reduce to 6', () =>{
      expect(fp.reduceDeal([1, 2, 3], (prev, curr) => {return prev + curr;})).toEqual(6);
    });
  });
});

describe('index.js', function(){
  describe('#concatDeal', () =>{
    test('should concat to [1,2,3,4]', () =>{
      expect(fp.concatDeal([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });
  });
});


describe('index.js', function(){
  describe('#spliceDeal', () =>{
    test('should splice to [1,2,3,4]', () =>{
      expect(fp.spliceDeal(['zach', 'was', 'here', 'or', 'was', 'he'], [0,3])).toEqual(['zach', 'was', 'here']);
    });
  });
});
