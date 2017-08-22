'use strict'

const fp = require('../lib/fp');
describe('fp.js', function() {
  describe('default properties', () => {
    test('should return', ()=> {
      expect(fp.myMap([4,6,8],(num => num * 2))).toEqual([8,12,16]);
    });
  });
});
