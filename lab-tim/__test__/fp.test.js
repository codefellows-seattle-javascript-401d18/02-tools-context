'use strict';

// create a map, filter, reduce, concat, and splice array method
// using the .call and .apply methods
// if arguments is not array, return error

const fp = require('../lib/fp');

describe('Testing fp.js', function() {
  describe('#map', () => {
    test('Should return array values doubled', () => {
      expect(fp.map([1,2,3,4,5])).toEqual([2,4,6,8,10])
    })
    test('Should return array values doubled', () => {
      expect(fp.map([15,25,35,45,55])).toEqual([30,50,70,90,110])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.map('bob')).toEqual('Data is not an array')
    })
  })
  describe('#filter', () => {
    test('Should return array with only numbers greater than 10', () => {
      expect(fp.filter([1,4,7,12,18,26])).toEqual([12,18,26])
    })
    test('Should return array with only numbers greater than 10', () => {
      expect(fp.filter([5,14,7,22,2,57])).toEqual([14,22,57])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.filter('bob')).toEqual('Data is not an array')
    })
  })
  describe('#reduce', () => {
    test('should return numbers subtracted', () => {
      expect(fp.reduce(10, 5)).toEqual(5)
    })
    test('should return NaN if arguments are not numbers', () => {
      expect(fp.reduce('bob', 'jim')).toEqual(NaN)
    })
  })
  describe('#concat', () => {
    test('should return numbers subtracted', () => {
      expect(fp.concat(10, 5)).toEqual(5)
    })
    test('should return NaN if arguments are not numbers', () => {
      expect(fp.concat('bob', 'jim')).toEqual(NaN)
    })
  })
  describe('#splice', () => {
    test('should return numbers subtracted', () => {
      expect(fp.splice(10, 5)).toEqual(5)
    })
    test('should return NaN if arguments are not numbers', () => {
      expect(fp.splice('bob', 'jim')).toEqual(NaN)
    })
  })
})
