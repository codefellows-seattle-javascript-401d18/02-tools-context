'use strict';

let arrayThing = module.exports = {};

arrayThing.mapMeth = (arr, callback) => {
  return Array.prototype.map.call(arr, callback);
};

arrayThing.filterMeth = (arr, callback) => {
  return Array.prototype.filter.call(arr, callback);
};

arrayThing.reduceMeth = (arr, callback) => {
  return Array.prototype.reduce.call(arr, callback);
};

arrayThing.concatMeth = (arr1, arr2) => {
  return Array.prototype.concat.apply(arr1, arr2);
};

arrayThing.spliceMeth = (arr, args) => {
  return Array.prototype.splice.apply(arr, args);
};
