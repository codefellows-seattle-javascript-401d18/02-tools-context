'use strict';

const fp = require('../lib/fp.js');
const expect = require('jest').expect;

// * create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` functions using the `call`, and `apply` methods we discussed today

//writing a test to for the fp.js. First off checking the map which I will just try to multiply an array by two
describe('frontPage', () => {
  describe('#map', ()=> {
    test('should throw array not provided error', () => {
      expect(() => fp.map()).toThrowError('Array not provided for map');
    });
    test('Should return an array with doubled number', () => {
      expect(fp.map([1,2,3,4], (n) => {return n * 2; })).toEqual([2,4,6,8]);
    });
  });
  describe('#filter', ()=>{
    test('should throw array not provided error', () => {
      expect(fp.filter()).toThrowError('Array not provided for filter');
    });
    test('Should return an array that is missing 4', () => {
      expect(fp.filter([1,2,3,4], (n) => {return n !== 4;})).toEqual([1,2,3]);
    });
  });
  describe('#concat', () => {
    test('should throw array not provided error', () => {
      expect(fp.concat()).toThrowError('Nothing to concat provide');
    });
    test('should return both arrays combine', () => {
      expect(fp.concat([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
    });
  });
  describe('#splice', () => {
    test('should throw array not provided error', () => {
      expect(fp.splice()).toThrowError('Initial array not provided for splice');
    });
    test('should reduce array', ()=> {
      expect(fp.splice([1,2,3,4,5,6,7,8,9])).toEqual([6,7,8]);
    });
  });
  describe('#reduce', () => {
    test('should throw array not provided error', () => {
      expect(fp.reduce()).toThrowError('Initial array not provided for reduce');
    });
    test('should reduce array', ()=> {
      expect(fp.reduce([0,1,2,3], (acc, n) => { return acc + n;}, 0)).toEqual([6]);
    });
  });
});
