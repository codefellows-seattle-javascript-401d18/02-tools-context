'use strict';

const fp = require('../lib/fp');

describe('Testing fp.js', function () {
  describe('default properties', () => {
    test('Should fail because this is TDD', () => {
      expect(fp.map([1,2,3], num=>num*2)).toEqual([3, 6, 9]);
    });
  });
});
