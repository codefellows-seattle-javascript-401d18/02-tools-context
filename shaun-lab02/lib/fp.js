'use strict';

// create a map, filter, reduce, concat, and splice array method
// using the .call and .apply methods
// if arguments is not array, return error

const arrayMeth = module.exports = {};

arrayMeth.myMap = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.map.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
};

arrayMeth.myFilter = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.filter.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
};

arrayMeth.myReduce = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, (prev, curr) => prev + curr);
  } else {
    return 'Data is not an array';
  }
};

arrayMeth.myConcat = (arr, args) => {
  if (Array.isArray(arr) && Array.isArray(args)) {
    return Array.prototype.concat.apply(arr, args);
  } else {
    return 'Data is not an array';
  }
};

arrayMeth.mySplice = (arr, args) => {
  if (Array.isArray(arr) && Array.isArray(args)) {
    return Array.prototype.splice.apply(arr, args);
  } else {
    return 'Data is not an array';
  }
};
