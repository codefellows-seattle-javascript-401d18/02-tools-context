'use strict';

const fp = require('../lib/fp');

describe('Testing fp.js', function () {
  //TESTS FOR MAP
  describe('testing #myMapFx', () => {
    test('Should return [2,4,6]', () => {
      expect(fp.myMapFx([1,2,3], num=>num*2)).toEqual([2,4,6]);
      //Why this works: we can make the expect conditions sorta be anything? They don't have to follow the traditional structure of map/filter/etc?//
    });
    test('Should return NOPE', () => {
      expect(fp.myMapFx('jolly old saint nicolas', num=>num*2)).toEqual('NOPE');
    });
    //NOTE: This edge case test isn't passing but I will look at it again later after I get closer on some of the other ones.//
    test('Should return NOPE', ()=> {
      expect(fp.myMapFx(['Nants', 'ingonyama', 2, 'bagithi', 'baba'], num=>num*2)).toEqual('NOPE');
    });
  });
  //TESTS FOR FILTER
  describe('testing #myFilterFx', ()=> {
    test('Should return [bob, joe, elvis]', ()=> {
      expect(fp.myFilterFx(['a','bob', 'joe', 'elvis'], word => word.length > 2)).toEqual(['bob', 'joe', 'elvis']);
    });
    test('Should return WUT DUDE NO', ()=>{
      expect(fp.myFilterFx(false, num=>num>2)).toEqual('WUT DUDE NO');
    });
    test('Should return [cats, carrots]', ()=>{
      expect(fp.myFilterFx(['cats','carrots', 'gingerbread'], word => word.includes('c'))).toEqual(['cats', 'carrots']);
    });
  });
  //TESTS FOR REDUCE
  describe('testing #myReduceFx', () => {
    test('Should return 10', ()=> {
      expect(fp.myReduceFx([1,2,3,4], (current, acc) => (current += acc))).toEqual(10);
    });
    //Not sure why these two don't work but I have to move on because this lab is taking forever and a day//
    test('Should return TRY AGAIN', ()=> {
      expect(fp.myReduceFx(['lalala', undefined], (current, acc) => (current += acc))).toEqual('TRY AGAIN');
    });
    test('Should return TRY AGAIN', ()=> {
      expect(fp.myReduceFx(['feet', 5, 6, 7], (current, acc)=> (current += acc))).toEqual('TRY AGAIN');
    });
  });
  //TESTS FOR CONCAT
  describe('testing #myConcatFx', () => {
    test('Should return rosemarythyme', ()=> {
      expect(fp.myConcatFx('rosemary', 'thyme'), (a,b)=> (a+b)).toEqual('rosemarythyme');
    });
    test('Should return PUT IN WORDS PLZ', ()=> {
      expect(fp.myConcatFx('cats', 100), (a,b)=> (a+b)).toEqual('PUT IN WORDS PLZ');
    });
    test('Should return PUT IN WORDS PLZ', ()=> {
      expect(fp.myConcatFx(undefined, Infinity), (a,b)=> (a+b)).toEqual('PUT IN WORDS PLZ');
    });
  });
  describe('testing #myConcatFx', () => {
    test('Should return rosemarythyme', ()=> {
      expect(fp.myConcatFx('rosemary', 'thyme'), (a,b)=> (a+b)).toEqual('rosemarythyme');
    });
});
