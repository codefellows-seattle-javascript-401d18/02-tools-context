'use strict'

const fp = require('../lib/fp')

describe('fp.js', function() {
  describe('#mapThing', () => {
    test('should return value of array plus one', () => {
      expect(fp.mapThing([1, 2, 3, 4])).toEqual([2, 3, 4, 5])
    })
  })
  describe('#filterThing', () => {
    test('should return values under certain number', () => {
      expect(fp.filterThing([1, 2, 3, 4])).toEqual([1, 2, 3])
    })
  })
  describe('#reduceThing', () => {
    test('should return values under certain number', () => {
      expect(fp.reduceThing([1, 2, 3, 4])).toEqual(10)
    })
  })
  describe('#concatThing', () => {
    test('should return concatenated array', () => {
      expect(fp.concatThing([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    })
  })
  describe('#spliceThing', () => {
    test('should return array with value removed', () => {
      expect(fp.spliceThing(['cat', 'dog', 'why', 'the sweet release of death'], [0, 2])).toEqual(['cat', 'dog'])
    })
  })
})
