'use strict'

const fp = require('../lib/fp')

describe('fp.js', function() {
  describe('default properties', () => {
    test('should return hello world', () => {
      expect(greet.hello('world!')).toEqual('hello world!')
    })
    test('should return null', ()=>{
      expect(greet.hello(200)).toEqual(null)
    })
  })
})
