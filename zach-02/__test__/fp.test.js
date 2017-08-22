'use strict';

const double = require('../lib/fp.js');

describe('index.js', function(){
  describe('#map', () =>{
    test('should be array * 2', () =>{
      expect(double([1, 2, 3])).toEqual([2, 4, 6]);
    });
  });
});
