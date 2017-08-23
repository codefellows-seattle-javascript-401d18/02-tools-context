'use strict';

const fp = require('../lib/fp');

describe('Testing fp.js', function () {
  describe('testing #myMapFx', () => {
    test('Should return [2,4,6]', () => {
      expect(fp.myMapFx([1,2,3], num=>num*2)).toEqual([2,4,6]);
      //Why this works: we can make the expect conditions sorta be anything? They don't have to follow the traditional structure of map/filter/etc?//
    });
    test('Should return NOPE', () => {
      expect(fp.myMapFx('jolly old saint nicolas', num=>num*2)).toEqual('NOPE');
    });
    test('Should return NOPE', ()=> {
      expect(fp.myMapFx(['Nants', 'ingonyama', 2, 'bagithi', 'baba'], num=>num*2)).toEqual('NOPE');
    });
  });
});
