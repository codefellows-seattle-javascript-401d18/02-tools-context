'use strict';

const fp = require('../lib/fp');

describe('Testing: fp.js', function(){
  describe('#myMap:',() =>  {
    test('should return...',() => {
      expect(fp.myMap([1, 2, 3],(num => num * 3))).toEqual([3, 6, 9]);
    });
  });
});
