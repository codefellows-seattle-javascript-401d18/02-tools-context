'use strict';

let arrMethod = module.exports ={};


arrMethod.myMap = function(arr, callback) {
  return Array.prototype.map.call(arr, callback);
};

arrMethod.myFilter = function(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
};

arrMethod.myReduce = function(arr, callback) {
  return Array.prototype.reduce.call(arr, callback);
};

arrMethod.myConcat = function(arr,arr1) {
  return Array.prototype.concat.call(arr,arr1);
};
//
// arrMethod.mySplice = function(arr, callback) {
//   return Array.prototype.splice.call(arr, callback);
// };
