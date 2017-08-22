'use strict';

// create a map, filter, reduce, concat, and splice array method
// using the .call and .apply methods
// if arguments is not array, return error

const fp = require('../lib/fp');

describe('Testing fp.js', () => {
  describe('#myMap', () => {
    test('Should return array values doubled', () => {
      expect(fp.myMap([1,2,3,4,5])).toEqual([2,4,6,8,10])
    })
    test('Should return array values doubled', () => {
      expect(fp.myMap([15,25,35,45,55])).toEqual([30,50,70,90,110])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.myMap('joe')).toEqual('Data is not an array')
    })
  })
  describe('#myFilter', () => {
    test('Should return array with only numbers greater than 10', () => {
      expect(fp.myFilter([1,4,7,12,18,26])).toEqual([12,18,26])
    })
    test('Should return array with only numbers greater than 10', () => {
      expect(fp.myFilter([5,14,7,22,2,57])).toEqual([14,22,57])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.myFilter('bob')).toEqual('Data is not an array')
    })
  })
  describe('#myReduce', () => {
    test('Should return accumulation of values in array', () => {
      expect(fp.myReduce([1,4,7,12,18,26])).toEqual(68)
    })
    test('Should return accumulation of values in array', () => {
      expect(fp.myReduce([16,14,27,32,108,267])).toEqual(464)
    })
    test('Should return error if argument is not array', () => {
      expect(fp.myReduce(42)).toEqual('Data is not an array')
    })
  })
  describe('#myConcat', () => {
    test('Should return the arrays concatenated together', () => {
      expect(fp.myConcat(['joe','bob'],['fred','hank'])).toEqual(['joe','bob','fred','hank'])
    })
    test('Should return the arrays concatenated together', () => {
      expect(fp.myConcat([1,7,63],[23,87,16])).toEqual([1,7,63,23,87,16])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.myConcat([42,17,5],56)).toEqual('Data is not an array')
    })
    test('Should return error if argument is not array', () => {
      expect(fp.myConcat('frank','joe')).toEqual('Data is not an array')
    })
  })
  describe('#mySplice', () => {
    test('Should return array with bird removed', () => {
      expect(fp.mySplice(['bird','fish','dog','cow'],[1,3])).toEqual(['fish','dog','cow'])
    })
    test('Should return array with green removed', () => {
      expect(fp.mySplice(['red','yellow','blue','green'],[0,3])).toEqual(['red','yellow','blue'])
    })
    test('Should return error if argument is not array', () => {
      expect(fp.mySplice('jimmy',[0,1])).toEqual('Data is not an array')
    })
  })
})
