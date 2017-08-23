'use strict';

const fp = require('../lib/fp');

describe('Testing fp.js', function () {
  describe('testing the myMapFx functionality', () => {
    test('Should return [2,4,6]', () => {
      expect(fp.myMapFx([1,2,3], num=>num*2)).toEqual([2,4,6]);
    });
  });
    // });
    // //Write another test
    // });
    //Write another test
  describe('testing the myFilterFx functionality', () => {
    test('Should return [100]', () => {
      expect(fp.myFilterFx(num > 5, [1,2,100])).toEqual([100]);
    });
  });
})
