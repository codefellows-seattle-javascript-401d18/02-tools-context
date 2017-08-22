'use strict'

let arrMethod = module.exports ={};


arrMethod.myMap = function(arr, callback) {
  return Array.prototype.map.call(arr, callback);
};

arrMethod.myFilter = function(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
};

// arrMethod.myReduce = function(arr, callback) {
//   return Array.prototype.reduce.call(arr, callback);
// };
//
// arrMethod.myConcatr = function(arr, callback) {
//   return Array.prototype.concat.call(arr, callback);
// };
//
// arrMethod.mySplice = function(arr, callback) {
//   return Array.prototype.splice.call(arr, callback);
// };
