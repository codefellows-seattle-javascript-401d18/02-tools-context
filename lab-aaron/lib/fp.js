'use strict';
let brainDead = module.exports = {};
//map
brainDead.theMap = (arr, callback) => {
  return Array.prototype.map.call(arr, callback);
};
//filter
brainDead.theFilter = (arr, callback) => {
  return Array.prototype.filter.call(arr, callback);
};
//reduce
brainDead.theReduce = (arr, callback) => {
  return Array.prototype.reduce.call(arr, callback);
};
//concat
brainDead.theConcat = (arr1, arr2) => {
  return Array.prototype.concat.apply(arr1, arr2);
};
//splice
brainDead.theSplice = (arr1, arr2, arr3) => {
  return Array.prototype.splice.call(arr1, arr2, arr3);
};
