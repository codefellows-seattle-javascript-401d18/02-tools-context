'use strict';

module.export = exports {};

exports.map = (arr, callback) => {
  if(!arr) throw new Error('no array provided');
  if(!callback) throw new Error('no callback provided');

  return Array.prototype.map.call(arr, callback);
};

exports.filter = (arr, callback) => {
  if(!arr) throw new Error('no array provided');
  if(!callback) throw new Error('no callback provided');

  return Array.prototype.filter.call(arr, callback);
};

exports.concat = (arr1, arr2) => {
  if(!arr1) throw new Error('no array provided');
  if(!arr2) throw new Error('no array provided');

  return Array.prototype.concat.apply(arr1, arr2);
};

exports.map = (arr, callback) => {
  if(!arr) throw new Error('no array provided');
  if(!callback) throw new Error('no callback provided');

  return Array.prototype.map.call(arr, callback);
};

exports.reduce = (arr, callback, start=0) => {
  if(!arr) throw new Error('no array provided');
  if(!callback) throw new Error('no callback provided');

  return Array.prototype.reduce.call(arr, callback);
};
