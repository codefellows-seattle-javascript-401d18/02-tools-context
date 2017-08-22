'use strict';

module.exports = exports = {};

exports.map = (list, ...args) => {
  if (!list) {
    throw new Error('Array not provided for Map');
  } else {
    return Array.prototype.map.call(list, ...args);
  }
};


exports.filter = (arr, callback) => {
  if (!arr) {
    throw new Error('Array not provided for Filter');
  } else {
    return Array.prototype.filter.call(arr, callback);
  }
};

exports.concat = (arr1, arr2) => {
  if (!arr1) {
    throw new Error('Initial array not provided for Concat');
  } else {
    return Array.prototype.concat.apply(arr1, arr2);
  }
};

exports.reduce = (arr, idx, callback) => {
  if (!arr){
    throw new Error('Initial array not provided for Reduce');
  } else {
    return Array.prototype.reduce.call(arr, idx, callback);
  }
};

exports.splice = (list, ...args) => {
  if (!list) {
    throw new Error('Initial array not provided for Splice');
  } else {
    return Array.prototype.splice.call(list, ...args);
  }
};
