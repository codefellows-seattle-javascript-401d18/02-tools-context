'use strict';

const fp = require('../lib/fp');

describe('Testing the FP module', function() {

  // Map method
  describe('#map', () => {
    test('should map each string char to an array and concat 2 to each char', () => {
      let words = fp.map('flabbergasted', n => n + 2);
      expect(words).toEqual(['f2', 'l2', 'a2', 'b2', 'b2', 'e2', 'r2', 'g2', 'a2', 's2', 't2', 'e2', 'd2']);
    });
    test('should return an array of 16, 32 given 8, 16', () => {
      let doubles = fp.map([1, 2], n => n * 2);
      expect(doubles).toEqual([2, 4]);
    });
    test('Should return error if argument is not array', () => {
      expect(fp.map()).toEqual('Error: Input is not an array');
    });
  });

  // Filter method
  describe('#filter', () => {
    test('should return an array of [cat, cat, cat]', () => {
      let cats = fp.filter(['dog', 'walrus', 'cat', 'feline', 'cat', 'human', 'cat'], n => n === 'cat');
      expect(cats).toEqual(['cat', 'cat', 'cat']);
    });
    test('should return an array of even numbers [numbers]', () => {
      let evens = fp.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0);
      expect(evens).toEqual([2, 4, 6, 8, 10]);
    });
    test('Should return error if argument is not array', () => {
      expect(fp.filter()).toEqual('Error: Input is not an array');
    });
  });

  // Reduce method
  describe('#reduce', () => {
    test('should return 6 given [1, 2, 3]', () => {
      let six = fp.reduce([0, 1, 2, 3], (acc, curr) => acc + curr);
      expect(six).toEqual(6);
    });
    test('should return "bummer" given ["b", "u", "m", "m", "e", "r"]', () => {
      let str = fp.reduce(['b', 'u', 'm', 'm', 'e', 'r'], (acc, curr) => acc + curr);
      expect(str).toEqual('bummer');
    });
    test('Should return error if argument is not array', () => {
      expect(fp.reduce()).toEqual('Error: Input is not an array');
    });
  });

  // Concat method
  describe('#concat', () => {
    test('should return ["this", "is", "one", "array"] given ["this", "is"] and ["one", "array"]', () => {
      let join = fp.concat(['this', 'is'], ['one', 'array']);
      expect(join).toEqual(['this', 'is', 'one', 'array']);
    });
    test('should return [1, 2, 3, 4, 5, 6] given [1, 2, 3] and [4, 5, 6]', () => {
      let join = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(join).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('Should return error if argument is not array', () => {
      expect(fp.concat()).toEqual('Error: Input is not an array');
    });
  });

  // Splice method
  describe('#splice', () => {
    test('should return ["dogs", "cats"] given ["snakes", "planes", "dogs", "cats"] starting at index 2', () => {
      let cut = fp.splice(['snakes', 'planes', 'dogs', 'cats'], 2, 2);
      expect(cut).toEqual(['dogs', 'cats']);
    });
    test('should return [7, 8, 9, 10] given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] starting at index 6', () => {
      let cut = fp.splice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, 4);
      expect(cut).toEqual([7, 8, 9, 10]);
    });
    test('Should return error if argument is not array', () => {
      expect(fp.splice()).toEqual('Error: Input is not an array');
    });
  });
});
