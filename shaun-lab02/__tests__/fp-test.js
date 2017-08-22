'use strict';


// * create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` functions using the `call`, and `apply` methods we discussed today

//writing a test to for the fp.js. First off checking the map which I will just try to multiply an array by two
describe('frontPage', () => {
  describe('#map', ()=> {
    it('should return [2, 4, 6, 8]', () =>{
      var result = fp.map([1, 2, 3, 4], (n) => n * 2);
      expect(fp.map).toEqual([2, 4, 6, 8]);
    });
  });
  describe('#filter', ()=>{
    it('should return [1, 2, 3]', ()=> {
      var result = fp.filter([1, 2, 3, 4], n => n !== 2);
      expect(fp.filter).toEqual([1, 2, 3]);
    });
  });
  describe('#concat', () => {
    it('should return [1, 2, 3, a, b, c]', () =>{
      var result = fp.concat([1, 2, 3], ['a', 'b', 'c']);
      except(fp.concat).toEqual([1, 2, 3, 'a', 'b', 'c']);
    })
  })
describe('#splice', () => {
   it('should return [duck, duck, duck]', () => {
     var result = fp.splice(['duck', 'duck', 'goose', 'duck'], 2, 1);
     expect(fp.splice).toEqual(['duck', 'duck', 'duck']);
   });

   it('should return [duck0, duck1, oyster, duck2]', () => {
     var result = fp.splice(['duck0', 'duck1', 'duck2'], 2, 0, ['oyster']);
     expect(fp.splice).toEqual(['duck0', 'duck1', 'oyster', 'duck2']);
   });
 });
 describe('#reduce', () => {
   it('should return 25', () => {
     var result = fp.reduce([1, 2, 3, 4], (a, b) => a + b, 15);
     expect(fp.reduce).to.equal(25);
   });

   it('should return 10', () => {
     var result = fp.reduce([1, 2, 3, 4], (a, b) => a + b);
     expect(fp.reduce).to.equal(10);
   });
 });
