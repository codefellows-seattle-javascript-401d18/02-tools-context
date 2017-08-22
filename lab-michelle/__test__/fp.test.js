'use strict';

const fp = require('../lib/fp');

describe('Testing fp.js', function () {
  describe('default properties', () => {
    test('Should fail because this is TDD', () => {
      expect([1,2,3]).toEqual([1,2,3]);
    });
  });
});
