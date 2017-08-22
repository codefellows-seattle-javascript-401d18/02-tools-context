'use strict';

module.exports = exports = {};

exports.myMap = (list, ...args) => {
  if (!list) {
    throw new Error('Array not provided for Map');
  } else {
    return Array.prototype.map.call(list, ...args);
  }
};


exports.myFilter = (arr, callback) => {
  if (!arr) {
    throw new Error('Array not provided for Filter');
  } else {
    return Array.prototype.filter.call(arr, callback);
  }
};

exports.myConcat = (arr1, arr2) => {
  if (!arr1) {
    throw new Error('Initial array not provided for Concat');
  } else {
    return Array.prototype.concat.apply(arr1, arr2);
  }
};

exports.myReduce = (arr, idx, callback) => {
  if (!arr){
    throw new Error('Initial array not provided for Reduce');
  } else {
    return Array.prototype.reduce.call(arr, idx, callback);
  }
};

exports.mySplice = (list, ...args) => {
  if (!list) {
    throw new Error('Initial array not provided for Splice');
  } else {
    return Array.prototype.splice.call(list, ...args);
  }
};
