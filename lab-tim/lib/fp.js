'use strict';

// create a map, filter, reduce, concat, and splice array method
// using the .call and .apply methods
// if arguments is not array, return error

const arrayStuff = module.exports = {};

arrayStuff.myMap = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.map.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.myFilter = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.filter.call(arr, callback);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.myReduce = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, (prev, curr) => prev + curr);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.myConcat = (arr, args) => {
  if (Array.isArray(arr) && Array.isArray(args)) {
    return Array.prototype.concat.apply(arr, args);
  } else {
    return 'Data is not an array';
  }
}

arrayStuff.mySplice = (arr, args) => {
  if (Array.isArray(arr) && Array.isArray(args)) {
    return Array.prototype.splice.apply(arr, args);
  } else {
    return 'Data is not an array';
  }
}
