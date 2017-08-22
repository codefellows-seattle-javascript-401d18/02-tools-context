'use strict';

// create a map, filter, reduce, concat, and splice array method
// using the .call and .apply methods
// if arguments is not array, return error

const arrayStuff = module.exports = {};

let double = function(num) {
  return num + num;
}

let greaterThanTen = function(ele) {
  return ele > 10;
}

arrayStuff.map = function(arr, callback) {
  if (Array.isArray(arr)) {
    return Array.prototype.map.call(arr, double);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.filter = function(arr, callback) {
  if (Array.isArray(arr)) {
    return Array.prototype.filter.call(arr, greaterThanTen);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.reduce = function(arr, callback) {
  if (Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.concat = function(arr, callback) {
  if (Array.isArray(arr)) {
    return Array.prototype.concat.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.splice = function(arr, callback) {
  if (Array.isArray(arr)) {
    return Array.prototype.splice.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
}
