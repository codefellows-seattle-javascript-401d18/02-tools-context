'use strict';


* create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` functions using the `call`, and `apply` methods we discussed today


describe('frontPage', () => {
  describe('#map', ()=> {
    it('should return [2, 4, 6, 8]', () =>{
      var result = fp.map([1, 2, 3, 4], (n) => n * 2);
      expect(fp.map).to.be.a(function);
      expect(result).to.be.equal([2, 4, 6, 8]);
    });
  });

describe('#filter')
describe('#reduce')
describe('#concat')
describe('#splice')
