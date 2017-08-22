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
    expect(fp.filter).toEqual([1, 2, 3]);
  });
});
describe('#concat', () => {
  it('should return [1, 2, 3, a, b, c]', () =>{
    except(fp.concat)
    expect(result).toEqual([1, 2, 3, a, b, c]);
  })
})
});
// describe('#reduce', () => {
//   it('should return')
// })
// describe('#splice')
// });
